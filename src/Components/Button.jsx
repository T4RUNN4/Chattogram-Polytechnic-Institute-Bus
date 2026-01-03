export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      class="w-full bg-[#30C7B8] text-white font-bold py-3 sm:py-4 px-6 rounded-lg text-lg sm:text-xl rounded-lg cursor-pointer drop-shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      {text}
    </button>
  );
}
