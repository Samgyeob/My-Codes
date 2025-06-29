const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const category = document.getElementById("category-select");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  const taskCategory = category.value;

  if (!unlockedCategories.includes(taskCategory)) {
    alert("This category has not yet been unlocked!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  li.classList.add(taskCategory);

  list.appendChild(li);
  input.value = "";
});


function checkAllDone() {
  const items = document.querySelectorAll("#todo-list li");
  let allDone = true;
  items.forEach(item => {
    if (!item.classList.contains("done")) {
      allDone = false;
    }
  });
  return allDone;
}

let currentPlant = "none";
let coins = 0;

// 수정된 growPlant()
function growPlant() {
  const categoryValue = category.value;
  const plantImg = document.getElementById("plant-img");

  if (categoryValue === "study") {
    plantImg.src = "potato3.png";
    currentPlant = "potato";
  } else if (categoryValue === "health") {
    plantImg.src = "carrot3.png";
    currentPlant = "carrot";
  } else if (categoryValue === "clean") {
    plantImg.src = "tomato3.png";
    currentPlant = "tomato";
  }
}

document.getElementById("harvest-btn").addEventListener("click", function () {
  if (currentPlant === "none") {
    alert("It's not yet grown!");
    return;
  }

  let reward = 0;
  let product = "";

  if (currentPlant === "potato") {
    reward = 10;
    product = "French Fries";
  } else if (currentPlant === "carrot") {
    reward = 8;
    product = "Carrot Juice";
  } else if (currentPlant === "tomato") {
    reward = 12;
    product = "Tomato Ketchup";
  }

  coins += reward;
  document.getElementById("coins").textContent = coins;

  alert(`You earned ${reward}G by selling ${product}!`);

  // 상태 초기화
  currentPlant = "none";
  document.getElementById("plant-img").src = "potato1.png";
});

let unlockedCategories = ["study", "health", "clean"]; // 기본 해금 상태

document.querySelectorAll(".locked-category").forEach(button => {
  button.addEventListener("click", () => {
    const categoryName = button.dataset.name;
    const cost = parseInt(button.dataset.cost);

    if (coins < cost) {
      alert("your G is not enough!");
      return;
    }

    coins -= cost;
    document.getElementById("coins").textContent = coins;

    // 카테고리 해금
    unlockedCategories.push(categoryName);
    const option = document.createElement("option");
    option.value = categoryName;
    option.textContent = categoryName;
    category.appendChild(option);

    // 버튼 숨기기
    button.disabled = true;
    button.textContent = `${categoryName} successfully unlocked!`;
  });
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");

    // 모두 완료되었는지 확인
    if (checkAllDone()) {
      growPlant();
    }
  }
});

let exp = 0;
let level = 1;
let nextExp = 50;
let title = "Lazy Potato";

const expDisplay = document.getElementById("exp");
const nextExpDisplay = document.getElementById("next-exp");
const levelDisplay = document.getElementById("level");
const titleDisplay = document.getElementById("title");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");

    // 완료 시 경험치 획득 (중복 방지)
    if (e.target.classList.contains("done") && !e.target.classList.contains("exp-given")) {
      const cat = e.target.classList[0];
      let gainedExp = 10; // 기본값

      if (cat === "study") gainedExp = 12;
      else if (cat === "health") gainedExp = 8;
      else if (cat === "clean") gainedExp = 6;
      else if (cat === "hobby") gainedExp = 9;
      else if (cat === "relationship") gainedExp = 11;

      exp += gainedExp;
      e.target.classList.add("exp-given");

      updateStatus();
    }

    if (checkAllDone()) {
      growPlant();
    }
  }
});

function updateStatus() {
  // 레벨업 처리
  while (exp >= nextExp) {
    exp -= nextExp;
    level++;
    nextExp = Math.floor(nextExp * 1.3); // 점점 더 많은 경험치 요구
    updateTitle();
  }

  // 화면 갱신
  expDisplay.textContent = exp;
  nextExpDisplay.textContent = nextExp;
  levelDisplay.textContent = level;
  titleDisplay.textContent = title;
}

function updateTitle() {
  if (level >= 15) title = "Break Legend";
  else if (level >= 10) title = "Gachi Seonggong";
  else if (level >= 7) title = "Mission Slayer";
  else if (level >= 5) title = "Lv.5 Hard Worker";
  else if (level >= 3) title = "Growing Potato";
  else title = "Lazy Potato";
}