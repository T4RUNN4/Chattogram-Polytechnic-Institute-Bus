export default function InputField({ type, placeholder, id, label }) {
  return (
    <>
      <div class="reveal">
        <label for={id} class="text-lg font-medium text-gray-700">
          {label}
        </label>
        <input
          required
          autocomplete="off"
          type={type}
          id={id}
          placeholder={placeholder}
          class="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#30C7B8] transition duration-300 text-gray-900"
        />
      </div>
    </>
  );
}
