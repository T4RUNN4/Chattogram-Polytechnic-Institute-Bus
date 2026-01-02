import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Heading from "../Components/Heading";

const lost_items = {
  1: {
    item: "এনভায়রমেন্টাল স্টাডিজ বই",
    date: "১২ই নভেম্বর ২০২৫",
    time: "রুট নাম্বার ৩-গামী বিকাল ৬টার",
    seat: "ঘ-৪",
  },
  2: {
    item: "fx 991Exs ক্যালকুলেটর",
    date: "৮ই ডিসেম্বর ২০২৫",
    time: "রুট নাম্বার ৬-গামী দুপুর ১:৩০টার",
    seat: "ঘ-৪",
  },
  3: {
    item: "কালো ছাতা",
    date: "৩০ই নভেম্বর ২০২৫",
    time: "রুট নাম্বার ৪-গামী সকাল ১০টার",
    seat: "ঘ-৪",
  },
};

export default function LostAndFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-8 px-10">
          <Heading
            text="হারানো"
            maintext="জিনিস"
            subtext="ক্যাম্পাস বাসে খুঁজে পাওয়া বিভিন্ন জিনিসের তালিকা। প্রমাণ'সহ ৬০ কর্মদিবসের
      মধ্যে ক্যাম্পাস কর্তৃপক্ষের কাছ থেকে সংগ্রহ করতে হবে।"
          />
          <section className="flex flex-col items-center justify-center gap-2">
            {Object.keys(lost_items).map((id) => {
              const data = lost_items[id];
              return (
                <details
                  key={id}
                  className="reveal border-2 border-black/10 py-4 px-6 cursor-pointer rounded-lg transition duration-200 ease-in-out drop-shadow-md w-[90%] bg-white hover:-translate-y-1 hover:scale-105"
                >
                  <summary className="text-xl font-bold py-2">{data.item}</summary>
                  গত <span className="font-bold">{data.date}</span> তারিখে{" "}
                  <span className="font-bold">{data.time}</span> বাসের সিট
                  নাম্বার {data.seat} এ একটি{" "}
                  <span className="font-bold">{data.item}</span> পাওয়া গিয়েছে।
                </details>
              );
            })}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
