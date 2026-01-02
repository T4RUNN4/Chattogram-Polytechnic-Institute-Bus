export default function InfoBox({ num_extra, num, details_extra, details, color }) {
  return (
    <div className="reveal flex flex-col md:flex-row items-center justify-center gap-8 p-5 border-2 border-black/10 rounded-lg bg-white drop-shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
      <div className="flex flex-col items-center justify-center">
        <p className="hidden md:flex text-xl md:text-xl font-bold">
          {num_extra}
        </p>
        <p
          className={`text-5xl md:text-6xl font-bold ${color} rounded-lg text-white px-4 pt-2`}
        >
          {num}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-xs md:text-sm pb-2 hidden md:flex">
          {details_extra}
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify md:text-left">
          {details}
        </p>
      </div>
    </div>
  );
}
