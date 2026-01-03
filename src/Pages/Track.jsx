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
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return Object.entries(stopMap).filter(
      ([bn, en]) => bn.includes(query) || en.includes(q)
    );
  }, [query]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main class="grow pb-8 px-10">
          <Heading
            text="বাস "
            maintext="ট্র্যাকিং"
            subtext="সকল বাস ছাড়া সময় সকাল ৭টা এবং দুপুর ১২টা। ফিরতি বাস ছাড়ার সময় দুপুর ১:৩০
        এবং বিকাল ৬টা"
          />
          <section class="flex flex-col items-center justify-center gap-6 pb-10">
            {result && (<div
              id="resultInfoDiv"
              class="p-6 border-2 rounded-lg bg-white drop-shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
            ></div>)}
            <div
              id="search"
              class="flex flex-col justify-center gap-4 sm:gap-6"
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
                    class="p-4 absolute z-10 bg-white border border-gray-300 mt-1 rounded-xl shadow-lg max-h-60 overflow-y-auto"
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
              <div class="reveal text-center mt-6">
                <Button id="searchButton" text="সার্চ করুন" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
