import HeroImage from "../Assets/hero.jpg";

export default function Hero() {
  return (
    <section class="flex flex-col items-center justify-center md:flex-row pb-10">
      <div class="flex">
        <img src={HeroImage} alt="bus flat illustration" class="w-180 reveal" />
      </div>
      <div class="flex flex-col items-center md:items-start justify-center gap-1.5 pt-4 px-6">
        <div>
          <p class="reveal text-xs border-2 border-black/10 py-1.5 px-4 rounded-full">
            চ.প.ই. বাস ট্র্যাকার
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2 text-xl md:text-2xl lg:text-4xl">
            <p class="reveal leading-tight font-bold text-center md:text-left">
              আপনার গন্তব্যস্থলগামী পরবর্তী ক্যাম্পাস বাস
              <span class="bg-[#30C7B8] pb-1 pt-2 px-3 text-white rounded-md">
                ট্র্যাক করুন
              </span>
            </p>
            <p class="reveal text-xs lg:text-sm text-center md:text-left">
              চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট এর শিক্ষার্থীদের জন্য নিজের
              গন্তব্যস্থলগামী বাস ট্র্যাক করার ওয়ান-স্টপ প্ল্যাটফর্ম
            </p>
          </div>
          <div class="reveal flex flex-row gap-2 md:gap-5 items-center justify-center md:items-start md:justify-start text-base md:text-lg">
            <a
              class="bg-[#30C7B8] text-white text-xs md:text-base py-1.5 px-6 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 drop-shadow-xl"
              href="./track"
            >
              ট্র্যাক করুন
            </a>
            <a
              class="border-2 border-black/10 bg-white text-xs md:text-base py-1.5 px-4 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 drop-shadow-xl"
              href="/bus-routes"
            >
              সকল রুট
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
