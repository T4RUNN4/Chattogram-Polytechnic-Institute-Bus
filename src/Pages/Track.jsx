import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Heading from "../Components/Heading";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import { stopMap, mockData } from "../Utils/BusData";
import { useState, useMemo } from "react";

export default function Track() {
  const [query, setQuery] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(false);
  const [showList, setShowList] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const [resultSubTitle, setResultSubTitle] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return Object.entries(stopMap).filter(
      ([bn, en]) => bn.includes(query) || en.toLowerCase().includes(q)
    );
  }, [query]);

  const tracking = () => {
    if (!query.trim() || !time) {
      setResult(true);
      setResultTitle("সঠিকভাবে স্টপ এবং সময় সিলেক্ট করুন।");
      setResultSubTitle("সার্চ করার সময় অবশ্যই সময় এবং স্টপ দুটোই দিতে হবে।");
      setBorderColor("border-red-600");
      setQuery("");
      setTime("");
      return;
    }

    const exists = Object.entries(stopMap).some(
      ([bn, en]) => bn === query || en.toLowerCase() === query.toLowerCase()
    );

    if (!exists) {
      setResult(true);
      setResultTitle("ভুল স্টপ");
      setResultSubTitle(
        "আপনার সিলেক্ট করা স্টপটি পাওয়া যায়নি। সাজেশন থেকে সঠিক স্টপটি সিলেক্ট করুন।"
      );
      setBorderColor("border-red-600");
      setQuery("");
      setTime("");
      return;
    }

    const passed = Object.values(mockData).some((bus) =>
      bus.passedStops.includes(query)
    );

    if (passed) {
      setResult(true);
      setResultTitle("দুঃখিত!");
      setResultSubTitle(
        "ক্যাম্পাস বাস আপনার স্টপ ইতিমধ্যে পার করে চলে গিয়েছে।"
      );
      setBorderColor("border-red-600");
      setQuery("");
      setTime("");
      return;
    }

    const bus = Object.values(mockData).find((b) =>
      b.nextStops.includes(query)
    );
    const stopIndex = bus.nextStops.indexOf(query);

    const minutesNeeded = bus.requiredTimes
      .slice(0, stopIndex + 1)
      .reduce((sum, t) => sum + t, 0);

    const [h, m] = time.split(":").map(Number);
    const base = new Date();
    base.setHours(h, m, 0);
    base.setMinutes(base.getMinutes() + minutesNeeded);

    const arrivalTime = base
      .toLocaleTimeString("bn-BD", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/AM|PM|পূর্বাহ্ণ|অপরাহ্ণ/g, "")
      .trim();

    if (bus) {
      setResult(true);
      setResultTitle(`মাত্র ${minutesNeeded.toLocaleString("bn-BD")} মিনিট!`);
      setResultSubTitle(
        `ক্যাম্পাস বাস আপনার স্টপ ${query} এ পৌঁছাবে আনুমানিক ${arrivalTime} এ`
      );
      setBorderColor("border-green-400");
      setQuery("");
      setTime("");
      return;
    } else {
      setResult(true);
      setResultTitle("কোনো বাস নেই");
      setResultSubTitle("আজকে আপনার স্টপগামী আর কোন ক্যাম্পাস বাস আপাতত নেই। ");
      setBorderColor("border-red-600");
      setQuery("");
      setTime("");
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-8 px-10">
          <Heading
            text="বাস "
            maintext="ট্র্যাকিং"
            subtext="সকল বাস ছাড়া সময় সকাল ৭টা এবং দুপুর ১২টা। ফিরতি বাস ছাড়ার সময় দুপুর ১:৩০
        এবং বিকাল ৬টা"
          />
          <section className="flex flex-col items-center justify-center gap-6 pb-10">
            {result && (
              <div
                className={`p-6 border-2 ${borderColor} rounded-lg bg-white drop-shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110`}
              >
                <p className="text-2xl font-bold">{resultTitle}</p>
                <p className="pt-2 text-base">{resultSubTitle}</p>
              </div>
            )}

            <div
              id="search"
              className="flex flex-col justify-center gap-4 sm:gap-6"
            >
              <div>
                <InputField
                  type="text"
                  placeholder="যাত্রা শুরুর স্থান....."
                  id="stop"
                  label="কোন স্টপ থেকে উঠবেন?"
                  value={query}
                  onChange={(val) => {
                    setQuery(val);
                    setShowList(true);
                  }}
                />
                {showList && suggestions.length > 0 && (
                  <div
                    id="result-div"
                    className="p-4 absolute z-10 bg-white border border-gray-300 mt-1 rounded-xl shadow-lg max-h-60 overflow-y-auto"
                  >
                    <ul id="result">
                      {suggestions.map(([bn, en]) => (
                        <li
                          key={bn}
                          onClick={() => {
                            setQuery(bn);
                            setShowList(false);
                          }}
                          className="text-base py-1 px-2 cursor-pointer hover:bg-[#30C7B8] hover:text-white rounded-md"
                        >
                          {bn}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <InputField
                type="time"
                placeholder="যাত্রা শুরুর স্থান....."
                id="time"
                label="কখন উঠবেন?"
                value={time}
                onChange={setTime}
              />
              <div className="reveal text-center mt-6">
                <Button text="সার্চ করুন" onClick={tracking} />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
