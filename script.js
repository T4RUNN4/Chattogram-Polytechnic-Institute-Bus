document.addEventListener("DOMContentLoaded", () => {
const stopMap = {
  "অক্সিজেন": "Oxygen",
  "চৌধুরি হাট": "Chowdhury Hat",
  "চুয়েট জংশন রোড": "CUET Junction Road",
  "কালুরঘাট জংশন": "kalurghat Junction",
  "চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট": "Chattogram Polytechnic Institute",
  "বহদ্দারহাট রুট টার্মিনাল": "Bahaddarhat Route Terminal",
  "শুলকবহর": "Shulokbohor",
  "চাঁদগাও": "Chadgao",
  "হাটাজারি রোড ক্রসিং": "Hatazari Road Crossing",
  "আগ্রাবাদ এক্সেস রোড": "Agrabad Access Road",
  "টাইগারপাস": "Tigerpass",
  "লালখান বাজার": "Lalkhan Bazar",
  "জিইসি মোড়": "GEC Circle",
  "২নং গেইট": "2no. Gate",
  "পতেঙ্গা": "Patenga",
  "ইপিজেড": "EPEZ",
  "কাস্টমস": "Customs",
  "নিমতলা": "Nimtola",
  "চকবাজার": "Chawkbazar",
  "মুরাদপুর": "Muradpur",
  "সীতাকুন্ড": "Sitakundu",
  "ফৌজদারহাট": "Fouzdarhat",
  "বায়োজীদ লিংক রোড": "Batzid Link Road",
  "পাহাড়তলী": "Pahartali",
  "খুলসী": "Khulsi",
};

const input = document.getElementById("stop");
const result = document.getElementById("result");
const resultDiv = document.getElementById("result-div");

  input.addEventListener("input", () => {
    const query = input.value.trim();
    result.innerHTML = "";

    if (!query) {
      resultDiv.classList.add("hidden");
      return;
    }

    resultDiv.classList.remove("hidden");

    Object.entries(stopMap).forEach(([key, value]) => {
      if (key.includes(query) || value.includes(query)) {
        const li = document.createElement("li");
        li.classList.add("text-base", "py-1", "px-2", "cursor-pointer", "hover:bg-[#30C7B8]", "hover:text-white", "rounded-md");
        li.textContent = `${key}`;

        li.addEventListener("click", () => {
          input.value = key;
          resultDiv.classList.add("hidden");
        });

        result.appendChild(li);
      }
    });
  });
});