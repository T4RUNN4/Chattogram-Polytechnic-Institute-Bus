document.addEventListener("DOMContentLoaded", () => {
  const stopMap = {
    "অক্সিজেন": "oxygen",
    "চৌধুরি হাট": "chowdhury hat",
    "চুয়েট জংশন রোড": "cuet junction road",
    "কালুরঘাট জংশন": "kalurghat junction",
    "চট্টগ্রাম পলিটেকনিক ইন্সটিটিউট": "chattogram polytechnic institute",
    "বহদ্দারহাট রুট টার্মিনাল": "bahaddarhat route terminal",
    "শুলকবহর": "shulokbohor",
    "চাঁদগাও": "chadgao",
    "হাটাজারি রোড ক্রসিং": "hatazari road crossing",
    "আগ্রাবাদ এক্সেস রোড": "agrabad access road",
    "টাইগারপাস": "tigerpass",
    "লালখান বাজার": "lalkhan bazar",
    "জিইসি মোড়": "gec circle",
    "২নং গেইট": "2no. gate",
    "পতেঙ্গা": "patenga",
    "ইপিজেড": "epez",
    "কাস্টমস": "customs",
    "নিমতলা": "nimtola",
    "চকবাজার": "chawkbazar",
    "মুরাদপুর": "muradpur",
    "সীতাকুন্ড": "sitakundu",
    "ফৌজদারহাট": "fouzdarhat",
    "বায়োজীদ লিংক রোড": "bayazid link road",
    "পাহাড়তলী": "pahartali",
    "খুলসী": "khulsi",
  };

  const mockData = {
    Bus1: {
      passedStops: ["বহদ্দারহাট রুট টার্মিনাল"],
      nextStops: ["শুলকবহর", "চাঁদগাও", "হাটাজারি রোড ক্রসিং"],
      requiredTimes: [5, 6, 12, 15],
    },
    Bus2: {
      passedStops: ["পতেঙ্গা", "ইপিজেড", "কাস্টমস", "নিমতলা"],
      nextStops: ["চকবাজার", "মুরাদপুর", "চৌধুরি হাট"],
      requiredTimes: [12, 10, 6, 7],
    }
  };

  const stopInput = document.getElementById("stop");
  const timeInput = document.getElementById("time");
  const searchButton = document.getElementById("searchButton");
  const result = document.getElementById("result");
  const resultDiv = document.getElementById("result-div");

  stopInput.addEventListener("input", () => {
    const query = stopInput.value.trim().toLowerCase();
    result.innerHTML = "";

    if (!query) return resultDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    Object.keys(stopMap).forEach(stop => {
      if (stop.includes(query) || stopMap[stop].includes(query)) {
        const li = document.createElement("li");
        li.className = "text-base py-1 px-2 cursor-pointer hover:bg-[#30C7B8] hover:text-white rounded-md";
        li.textContent = stop;
        li.onclick = () => {
          stopInput.value = stop;
          resultDiv.classList.add("hidden");
        };
        result.appendChild(li);
      }
    });
  });

  const timeToMinutes = t => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const minutesToTime = mins => {
    const h = Math.floor(mins / 60) % 12;
    const m = mins % 60;
    return `${h.toLocaleString("bn-BD")}:${m.toLocaleString("bn-BD")}`;
  };

  searchButton.addEventListener("click", () => {
    const stop = stopInput.value.trim();
    const time = timeInput.value;
    const userMinutes = timeToMinutes(time);

    if (!stop || !time) {
      alert("দয়া করে স্টপ এবং সময় নির্বাচন করুন");
      return;
    }

    const resultInfoDiv = document.getElementById("resultInfoDiv");
    resultInfoDiv.innerHTML = "";

    Object.values(mockData).forEach(bus => {
      if (bus.passedStops.includes(stop)) return;

      const index = bus.nextStops.indexOf(stop);
      if (index === -1) return;

      const eta = bus.requiredTimes
        .slice(0, index + 1)
        .reduce((a, b) => a + b, 0);

      const arrivalMinutes = userMinutes + eta;
      const arrivalTime = minutesToTime(arrivalMinutes);

      resultInfoDiv.classList.remove("hidden");
      resultInfoDiv.innerHTML = `
        <p class="text-2xl font-bold">
          মাত্র
          <span class="text-green-600">
            ${(eta).toLocaleString("bn-BD")}
          </span> মিনিট!
        </p>
        <p class="pt-2 text-base">
          ক্যাম্পাস বাস আপনার স্টপ
          <span class="font-semibold">${stop}</span> এ পৌঁছাবে আনুমানিক
          <span class="font-bold text-green-600">
            ${(arrivalTime).toLocaleString("bn-BD")}
          </span>
          টায়
        </p>
      `;

      stopInput.value="";
      timeInput.value="";
    });
  });
});