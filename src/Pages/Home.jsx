import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Card from "../Components/Card";
import Hero from "../Sections/Hero";
import Choice from "../Assets/choice.png";
import Time from "../Assets/time.png";
import Hourglass from "../Assets/hourglass.png";
import List from "../Assets/list.png";
import Lost from "../Assets/lost-items.png";
import Corpora from "../Assets/corpora.png";
import Man from "../Assets/man.png";
import Hijab from "../Assets/hijab.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main class="grow md:pt-5 pb-8 px-10">
          <Hero />
          <section class="flex flex-col items-center justify-center pt-20 pb-10">
            <div class="pb-10">
              <p class="reveal leading-tight text-center font-bold text-2xl md:text-3xl lg:text-4xl">
                কীভাবে{" "}
                <span class="bg-[#30C7B8] p-2 rounded-md text-white">
                  চ.প.ই. বাস
                </span>{" "}
                কাজ করে?
              </p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:px-10 lg:px-20">
              <Card
                img={Choice}
                alt="choice icon"
                text="আপনার স্টপ সিলেক্ট করুন"
              />
              <Card img={Time} alt="time icon" text="আপনার সময় সিলেক্ট করুন" />
              <Card
                img={Hourglass}
                alt="hourglass icon"
                text="পরবর্তী বাসের সময় জানুন"
              />
            </div>
          </section>
          <section class="flex flex-col items-center justify-center pt-20 pb-10">
            <div class="pb-10">
              <p class="reveal leading-tight font-bold text-2xl md:text-3xl lg:text-4xl">
                অন্যান্য
                <span class="bg-[#30C7B8] pb-1 pt-2 px-2 rounded-md text-white">
                  পেইজসমূহ
                </span>
              </p>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center md:px-10 lg:px-20 gap-5">
              <Card img={List} alt="list icon" text="সকল বাস রুটের তালিকা" />
              <Card
                img={Lost}
                alt="lost items icon"
                text="হারানো জিনিসের তালিকা"
              />
              <Card
                img={Corpora}
                alt="corpora icon"
                text="বাস ব্যবহারের নিয়মাবলি"
              />
            </div>
          </section>
          <section class="flex flex-col items-center justify-center pt-20 pb-10">
            <div class="pb-10">
              <p class="reveal leading-tight font-bold text-2xl md:text-3xl lg:text-4xl">
                ব্যবহারকারীদের
                <span class="bg-[#30C7B8] pb-1 pt-2 px-2 rounded-md text-white">
                  মতামত
                </span>
              </p>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-center md:px-5 lg:px-20 gap-5">
              <div class="reveal flex items-center justify-center gap-6 p-5 border-2 border-black/10 rounded-lg bg-white drop-shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                <img
                  src={Man}
                  class="h-12 md:h-20"
                  alt="choice icon"
                />
                <div class="flex flex-col items-start">
                  <p class="text-base md:text-xl font-bold">মো. মেহেদী হাসান</p>
                  <p class="text-xs md:sm">
                    চিফ ইন্সট্রাকটর, কম্পিউটার সায়েন্স এন্ড টেকনোলজী
                  </p>
                  <p class="text-sm md:text-base text-align-justified pt-5">
                    অনেক স্মুথ UI এর এই চমৎকার ওয়েবসাইটি শিক্ষার্থীদের দৈনন্দিন
                    যাতায়াতে নিশ্চয় অনেক বেশী সাহায্যকারী হবে।
                  </p>
                </div>
              </div>
              <div class="reveal flex items-center justify-center gap-6 p-5 border-2 border-black/10 rounded-lg cursor-pointer bg-white drop-shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                <img
                  src={Hijab}
                  class="h-12 md:h-20"
                  alt="choice icon"
                />
                <div class="flex flex-col items-start">
                  <p class="text-base md:text-xl font-bold">জান্নাতুল নাঈমা</p>
                  <p class="text-xs md:sm">
                    শিক্ষার্থী, কম্পিউটার সায়েন্স এন্ড টেকনোলজী
                  </p>
                  <p class="text-sm md:text-base text-align-justified pt-5">
                    চট্টগ্রাম পলিটেকনিক শিক্ষার্থী যারা প্রতিদিন অনেক দূর থেকে
                    ক্লাস করতে আসে, তাদের জন্য খুবই উপকারী একটি প্ল্যাটফর্ম।
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
