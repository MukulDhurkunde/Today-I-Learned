const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://kludbfjsaambroxhqoqw.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdWRiZmpzYWFtYnJveGhxb3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzODQwNTksImV4cCI6MTk5Mzk2MDA1OX0.tv-dRqaqkTSuhJ2Q_HviQ9P0d2-CbwjJdR3-OtKtkyQ",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdWRiZmpzYWFtYnJveGhxb3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzODQwNTksImV4cCI6MTk5Mzk2MDA1OX0.tv-dRqaqkTSuhJ2Q_HviQ9P0d2-CbwjJdR3-OtKtkyQ",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.Category === "technology");
  // console.log(data);
  createFactList(data);
}

function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
        <p> ${fact.text}
          <a class="source" href="${fact.source}" target="_blank">(Source)</a>
         </p>
         <span class="tag" style="background-color: ${
           CATEGORIES.find((cat) => cat.name === fact.category).color
         }">${fact.Category}</span>
        </li>`
  );
  //console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//createFactList(initialFacts);
//createFactList([{ text: "Johnas" }]); Undefined
//factsList.insertAdjacentHTML("afterbegin", "<li>Mukul</li>");

// Toggle from visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
console.log(CATEGORIES.find((cat) => cat.name === "technology").color);

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let voteFalse = 4;
const isCorrect = voteFalse > totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.33casdasd"));
*/

/*
function calcFactAge(year) {
  //const currentYear = 2022;
  //const age = currentYear - year;
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
  //return age;
}

const calcFactAge2 = (year) => 2022 - year;
console.log(calcFactAge2(2015));
*/

/*
const age = calcFactAge(2015);
console.log(age);
let votesInteresting = 23;
let votesMindblowing = 15;

// falsy values: 0, "", null

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Something else");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources..";

//alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact "${text}". its is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct." : "not true."
}`;
console.log(str); */
/*
const fact = ["Lisbon is captial of Portugal", 2015, true];
console.log(fact);
console.log(fact[1]);
console.log(fact.length);

const [text, createdIn, isCorrect] = fact;
console.log(text);

const newFact = [...fact, "society"];
console.log(newFact);
*/
/*
const factObj = {
  text: "Lisbon is captial of Portugal",
  category: "Society",
  created: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}.`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]);

const { category, created } = factObj;
console.log(category, factObj.createSummary());*/

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });
// const time10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
/*
const time10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(time10);



const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);



function calcFactAge(year) {
  //const currentYear = 2022;
  //const age = currentYear - year;
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
  //return age;
}
const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges); */
