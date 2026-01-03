import HumanCard from "../Components/HumanCard";
import Man from "../Assets/man.png";
import Hijab from "../Assets/hijab.png";

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-10">
      <div className="pb-10">
        <p className="reveal leading-tight font-bold text-2xl md:text-3xl lg:text-4xl">
          ব্যবহারকারীদের{" "}
          <span className="bg-[#30C7B8] pb-1 pt-2 px-2 rounded-md text-white">
            মতামত
          </span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center md:px-5 lg:px-20 gap-5">
        <HumanCard
          img={Man}
          alt="man icon"
          name="মো. মেহেদী হাসান"
          role="চিফ ইন্সট্রাকটর, কম্পিউটার সায়েন্স এন্ড টেকনোলজী"
          description="অনেক স্মুথ UI এর এই চমৎকার ওয়েবসাইটি শিক্ষার্থীদের দৈনন্দিন
                    যাতায়াতে নিশ্চয় অনেক বেশী সাহায্যকারী হবে।"
        />
        <HumanCard
          img={Hijab}
          alt="woman icon"
          name="জান্নাতুল নাঈমা"
          role="শিক্ষার্থী, কম্পিউটার সায়েন্স এন্ড টেকনোলজী"
          description="চট্টগ্রাম পলিটেকনিক শিক্ষার্থী যারা প্রতিদিন অনেক দূর থেকে
                    ক্লাস করতে আসে, তাদের জন্য খুবই উপকারী একটি প্ল্যাটফর্ম।"
        />
      </div>
    </section>
  );
}
