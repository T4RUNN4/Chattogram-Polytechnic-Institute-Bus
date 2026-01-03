export default function HumanCard({ img, alt, name, role, description }) {
  return (
    <div className="reveal flex items-center justify-center gap-6 p-5 border-2 border-black/10 rounded-lg bg-white drop-shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
      <img src={img} className="h-12 md:h-20" alt={alt} />
      <div className="flex flex-col items-start">
        <p className="text-base md:text-xl font-bold">{name}</p>
        <p className="text-xs md:sm">
          {role}
        </p>
        <p className="text-sm md:text-base text-align-justified pt-5">
          {description}
        </p>
      </div>
    </div>
  );
}
