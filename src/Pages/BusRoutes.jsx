import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import Heading from "../Components/Heading";
import InfoBox from "../Components/InfoBox";

const num_extra = "রুট";
const details_extra = "যেই রাস্তা দিয়ে যাবে:";

const routes = {
  "১": {
    r: "অক্সিজেন - চৌধুরি হাট - চুয়েট জংশন রোড - কালুরঘাট জংশন - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-orange-600",
  },
  "২": {
    r: "বহদ্দারহাট রুট টার্মিনাল - শুলকবহর - চাঁদগাও - হাটাজারি রোড ক্রসিং - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-purple-800",
  },
  "৩": {
    r: "আগ্রাবাদ এক্সেস রোড - টাইগারপাস - লালখান বাজার - জিইসি মোড় - ২নং গেইট - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-green-500",
  },
  "৪": {
    r: "পতেঙ্গা - ইপিজেড - কাস্টমস - নিমতলা - চকবাজার - মুরাদপুর - চৌধুরি হাট - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-blue-700",
  },
  "৫": {
    r: "সীতাকুন্ড - ফৌজদারহাট - বায়োজীদ লিংক রোড - চুয়েট রোড জংশন - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-pink-600",
  },
  "৬": {
    r: "পাহাড়তলী - খুলসী - লালখান বাজার - মুরাদপুর - চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট",
    color: "bg-amber-400",
  },
};

export default function BusRoutes() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-8 px-10">
          <Heading
            text="সকল"
            maintext="বাস রুট"
            subtext="সকল বাস ছাড়া সময় সকাল ৭টা এবং দুপুর ১২টা। ফিরতি বাস ছাড়ার সময় দুপুর ১:৩০
        এবং বিকাল ৬টা"
          />
          <section className="flex flex-col items-center justify-center">
            <div className="grid lg:grid-flow-col grid-rows-1 md:grid-rows-3 gap-2">
              {Object.keys(routes).map((key) => {
                const data = routes[key];
                return (
                  <InfoBox
                    num={key}
                    num_extra={num_extra}
                    details_extra={details_extra}
                    details={data.r}
                    color={data.color}
                  />
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
