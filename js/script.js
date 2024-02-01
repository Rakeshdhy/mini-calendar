const todayDate = document.getElementById("date");
const todayDay = document.getElementById("day");
const todayMonth = document.getElementById("month");
const todayYear = document.getElementById("year");

const weeksDays = [
  "sunday",
  "Monday",
  "tuesday",
  "wendnesday",
  "Thurday",
  "Friday",
  "Saturday",
];

const allMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];

const currentDate = new Date();
todayDate.innerText = currentDate.getDate();
todayDay.innerText = weeksDays[currentDate.getDay()];
todayMonth.innerText = allMonth[currentDate.getMonth()];
todayYear.innerText = currentDate.getFullYear();
