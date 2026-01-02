export default function Heading({ text, extratext, maintext, subtext }) {
  return (
    <section className="flex flex-col items-center justify-center pt-12">
      <div className="flex flex-col items-center justify-center gap-4 pb-10">
        <p className="reveal leading-tight font-bold text-2xl md:text-4xl">
          {text}
          <span className="bg-[#30C7B8] pb-1 pt-2 px-2 rounded-md text-white">
            {maintext}
          </span>
        </p>
        <p className="reveal text-xs md:sm text-center md:text-start">
          {subtext}
        </p>
      </div>
    </section>
  );
}
