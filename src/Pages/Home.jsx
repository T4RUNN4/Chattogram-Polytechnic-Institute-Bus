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
import Testimonial from "../Sections/Testimonial";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow md:pt-5 pb-8 px-10">
          <Hero />
          <section className="flex flex-col items-center justify-center pt-20 pb-10">
            <div className="pb-10">
              <p className="reveal leading-tight text-center font-bold text-2xl md:text-3xl lg:text-4xl">
                কীভাবে{" "}
                <span className="bg-[#30C7B8] p-2 rounded-md text-white">
                  চ.প.ই. বাস
                </span>{" "}
                কাজ করে?
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:px-10 lg:px-20">
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
          <section className="flex flex-col items-center justify-center pt-20 pb-10">
            <div className="pb-10">
              <p className="reveal leading-tight font-bold text-2xl md:text-3xl lg:text-4xl">
                অন্যান্য{" "}
                <span className="bg-[#30C7B8] pb-1 pt-2 px-2 rounded-md text-white">
                  পেইজসমূহ
                </span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:px-10 lg:px-20 gap-5">
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
          <Testimonial />
        </main>
        <Footer />
      </div>
    </>
  );
}
