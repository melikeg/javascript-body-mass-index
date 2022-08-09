const w = document.getElementById("weight");
const h = document.getElementById("height");
const alertDOM = document.getElementById("alert");

const indexCalculate = (w, h) => {
  const massIndex = w / ((h / 100) * (h / 100));
  const index = Math.round(massIndex * 100) / 100;
  let bmi = undefined;
  let percent = 0;
  let color = "#fff";
  if (index < 16) {
    bmi = "a Severe Thinness";
    percent = 20;
    color = "#dc3545";
  } else if (index > 16 && index < 17) {
    bmi = "a Moderate Thinness";
    percent = 30;
    color = "#dc3545";
  } else if (index > 17 && index < 18.5) {
    bmi = "a Mild Thinness";
    percent = 46;
    color = "#ffc107";
  } else if (index > 18.5 && index < 25) {
    bmi = "a Normal"; //46,25 //62,5
    percent = 50;
    color = "#28a745";
  } else if (index > 25 && index < 30) {
    bmi = "an Overweight";
    percent = 70;
    color = "#ffc107";
  } else if (index > 30 && index < 35) {
    bmi = "an Obese Class I";
    percent = 85;
    color = "#dc3545";
  } else if (index > 35 && index < 40) {
    bmi = "an Obese Class II";
    percent = 95;
    color = "#dc3545";
  } else {
    bmi = "an Obesity III";
    percent = 100;
    color = "#dc3545";
  }
  showResultBar(bmi, percent, color);
  backgroundChange(color);
  return `<b>Your body mass index is:</b> ${index} <br/> Your result suggests you are <b>${bmi}</b>`;
};

const calculateBtn = () => {
  const weight = Number(w.value);
  const height = Number(h.value);

  if (weight == "" && height == "") {
    alertMessage("You did not enter a weight or height value.");
  } else {
    if (weight >= 350 || weight <= 0) {
      alertMessage("The weight value should be between 0kg and 300kg.");
    } else if (height > 250 || height < 30) {
      alertMessage("The height value should be between 30cm and 250cm.");
    } else {
      const result = indexCalculate(weight, height);

      const footer = document.getElementById("footer");
      footer.style.height = "30vh";
      document.querySelector(".footer-container").style.height = "25vh";

      document.getElementById("result").innerHTML = result;
    }
  }
};

const showResultBar = (bmi, percent, color) => {
  const resultBar = document.getElementById("result_bar");

  if (resultBar.hasChildNodes()) {
    resultBar.removeChild(resultBar.firstChild);
  }
  const myProgress = document.createElement("div");
  myProgress.setAttribute(
    "style",
    "width: 100%;background-color: #ddd;border-radius: 5px;"
  );
  resultBar.append(myProgress);
  const myBar = document.createElement("div");
  myBar.setAttribute(
    "style",
    `width: ${percent}%;height: 30px;background-color: ${color};text-align: center;line-height: 30px;color: white;border-radius: 5px;`
  );
  myBar.setAttribute("class", "myBar");
  myBar.innerHTML = `${bmi}`;
  myProgress.append(myBar);
};

const backgroundChange = (color) => {
  if (color === "#ffc107") {
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to bottom left, #ffcb1c 9%, #ff6732 94%)";
  } else if (color === "#28a745") {
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to bottom left, #0fe475 15%, #08b2b4 85%)";
  } else if (color === "#dc3545") {
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to bottom left, #ff0d46 9%, #ff6732 64%)";
  }
};

const alertMessage = (message) => {
  alertDOM.style.visibility = "visible";
  alertDOM.innerHTML = message;

  const myTimeout = setTimeout(() => {
    alertDOM.style.visibility = "hidden";
  }, 2000);
};
