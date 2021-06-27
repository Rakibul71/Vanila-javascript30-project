const sadiaBirthday = "4 Aug 2021";
const totalDays = document.getElementById("days");
const totalHours = document.getElementById("hours");
const totalMinutes = document.getElementById("minutes");
const totalSeconds = document.getElementById("seconds");
function countDown() {
  const currentDate = new Date(sadiaBirthday);
  const presentDate = new Date();
  const timeDistance = (currentDate - presentDate) / 1000;
  const Days = Math.floor(timeDistance / (24 * 3600));
  const Hours = Math.floor(timeDistance / 3600) % 24;
  const Minutes = Math.floor(timeDistance / 60) % 60;
  const Seconds = Math.floor(timeDistance) % 60;
  console.log(Seconds);
  totalDays.innerHTML = Days;
  totalHours.innerHTML = Hours;
  totalMinutes.innerHTML = Minutes;
  totalSeconds.innerHTML = Seconds;
}

countDown();

setInterval(countDown, 1000);
