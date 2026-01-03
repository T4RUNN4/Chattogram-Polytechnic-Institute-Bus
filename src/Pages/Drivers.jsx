import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Heading from "../Components/Heading";
import HumanCard from "../Components/HumanCard";
import Driver1 from "../Assets/driver1.png";
import Driver2 from "../Assets/driver2.png";
import Driver3 from "../Assets/driver3.png";
import Driver4 from "../Assets/driver4.png";
import Driver5 from "../Assets/driver5.png";
import Driver6 from "../Assets/driver6.png";

export default function Driver() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-8 px-10">
          <Heading
            maintext="চালকদের"
            extratext="তালিকা"
            subtext="যেসকল চালকগণ ক্যাম্পাসবাস চালান তাদের তালিকা"
          />
          <section className="flex flex-col items-center justify-center">
            <div className="grid lg:grid-flow-col grid-rows-1 md:grid-rows-2 gap-2">
              <HumanCard
                img={Driver1}
                alt="driver icon"
                name="হোসেন কাদের ফারদিন"
                role="যোগদানের তারিখ: ০১/০৪/২৩"
                description="রুট নাম্বার ১ এবং ২ গাড়ির দায়িত্বপ্রাপ্ত"
              />
              <HumanCard
                img={Driver2}
                alt="driver icon"
                name="আবরারুল আনোয়ার"
                role="যোগদানের তারিখ: ০১/০১/২৪"
                description="রুট নাম্বার ১ এবং ৩ গাড়ির দায়িত্বপ্রাপ্ত"
              />
              <HumanCard
                img={Driver3}
                alt="driver icon"
                name="আশরাফুল হক"
                role="যোগদানের তারিখ: ০১/০১/২৪"
                description="রুট নাম্বার ৩ এবং ৪ গাড়ির দায়িত্বপ্রাপ্ত"
              />
              <HumanCard
                img={Driver4}
                alt="driver icon"
                name="মো: রিয়াজ হোসেন"
                role="যোগদানের তারিখ: ০১/০১/২৪"
                description="রুট নাম্বার ২ এবং ৪ গাড়ির দায়িত্বপ্রাপ্ত"
              />
              <HumanCard
                img={Driver5}
                alt="driver icon"
                name="আয়াজ মাহমুদ"
                role="যোগদানের তারিখ: ০১/০৪/২৩"
                description="রুট নাম্বার ৫ এবং ৬ গাড়ির দায়িত্বপ্রাপ্ত"
              />
              <HumanCard
                img={Driver6}
                alt="driver icon"
                name="রিদওয়ান সরকার"
                role="যোগদানের তারিখ: ০১/০৪/২৩"
                description="রুট নাম্বার ৫ এবং ৬ গাড়ির দায়িত্বপ্রাপ্ত"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
