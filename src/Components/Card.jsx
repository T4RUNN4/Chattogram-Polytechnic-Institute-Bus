export default function Card({ img, alt, text }) {
  return (
    <div class="reveal flex flex-col items-center justify-center gap-6 p-5 border-2 border-black/10 rounded-lg cursor-pointer bg-white drop-shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
      <img src={img} class="h-12 md:h-20" alt={alt} />
      <p class="text-base md:text-lg lg:text-xl md:text-center lg:text-left font-bold">
        {text}
      </p>
    </div>
  );
}
