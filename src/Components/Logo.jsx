import icon from "../Assets/front-of-bus.png";

export default function Logo() {
  return (
    <div className="flex flex-row items-start gap-3" id="logo">
      <img src={icon} alt="bus-icon" className="h-6" />
      <a
        href="/"
        className="text-sm md:text-xl font-bold text-[#30C7B8] cursor-pointer p-1"
      >
        চ.প.ই. বাস
      </a>
    </div>
  );
}
