document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".reveal", {
    distance: "60px",
    origin: "bottom",
    duration: 800,
    easing: "ease-out",
    interval: 140,
    reset: false
  });

  const stopInput = document.getElementById("stop");
  const timeInput = document.getElementById("time");
  const searchButton = document.getElementById("searchButton");
  const result = document.getElementById("result");
  const resultDiv = document.getElementById("result-div");

  const timeToMinutes = t => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const minutesToTime = mins => {
    let h = Math.floor(mins / 60) % 12;
    if(h === 0) {
      h = 12
    };
    const m = mins % 60;
    return `${h.toLocaleString("bn-BD")}:${m.toLocaleString("bn-BD")}`;
  };

  searchButton.addEventListener("click", () => {
    const stop = stopInput.value.trim();
    const time = timeInput.value;
    const userMinutes = timeToMinutes(time);
    const resultInfoDiv = document.getElementById("resultInfoDiv");
    resultInfoDiv.innerHTML = "";

    if (!stop || !time) {
      resultInfoDiv.classList.remove("hidden", "border-red-600", "border-green-400");
      resultInfoDiv.classList.add("border-red-600");
      resultInfoDiv.innerHTML = `
        <p class="text-2xl font-bold">সঠিকভাবে স্টপ এবং সময় সিলেক্ট করুন।</p>
      `;
      stopInput.value="";
      timeInput.value="";
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(stopMap, stop)) {
      resultInfoDiv.classList.remove("hidden", "border-red-600", "border-green-400");
      resultInfoDiv.classList.add("border-red-600");
      resultInfoDiv.innerHTML = `
        <p class="text-2xl font-bold">স্টপ পাওয়া যায়নি</p>
        <p class="pt-2 text-base">
          সাজেশন থেকে সঠিক স্টপটি সিলেক্ট করুন।</a>
        </p>
      `;
      stopInput.value="";
      timeInput.value="";
      return;
    }

    const servedByAnyBus = Object.values(mockData).some(bus =>
      bus.nextStops.includes(stop) || bus.passedStops.includes(stop)
    );

    if (!servedByAnyBus) {
      resultInfoDiv.classList.remove("hidden", "border-red-600", "border-green-400");
      resultInfoDiv.classList.add("border-red-600");
      resultInfoDiv.innerHTML = `
        <p class="text-2xl font-bold">কোনো বাস নেই</p>
        <p class="pt-2 text-base">
          আজকে আপনার স্টপগামী আর কোন ক্যাম্পাস বাস আপাতত নেই। 
        </p>
      `;
      stopInput.value="";
      timeInput.value="";
      return;
    }

    Object.values(mockData).forEach(bus => {
      if (bus.passedStops.includes(stop)) {
        resultInfoDiv.classList.remove("hidden", "border-red-600", "border-green-400");
        resultInfoDiv.classList.add("border-red-600");
        resultInfoDiv.innerHTML = `
          <p class="text-2xl font-bold">
            দুঃখিত!
          </p>
          <p class="pt-2 text-base">
            ক্যাম্পাস বাস আপনার স্টপ ইতিমধ্যে পার করে চলে গিয়েছে।
          </p>
        `;
        stopInput.value="";
        timeInput.value="";
        return;
      };

      const index = bus.nextStops.indexOf(stop);
      if (index === -1) return;

      const eta = bus.requiredTimes
        .slice(0, index + 1)
        .reduce((a, b) => a + b, 0);

      const arrivalMinutes = userMinutes + eta;
      const arrivalTime = minutesToTime(arrivalMinutes);

      resultInfoDiv.classList.remove("hidden", "border-red-600", "border-green-400");
      resultInfoDiv.classList.add("border-green-400");
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
          টায়। </br>
          বাসে মোট খালি সিটের সংখ্যা <span class="font-bold text-green-600">${(bus.seats).toLocaleString("bn-BD")}</span>টি
        </p>
      `;

      stopInput.value="";
      timeInput.value="";
    });
  });
});