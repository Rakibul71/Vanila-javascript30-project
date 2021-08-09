const searchInput = document.querySelector(".search");
const result = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function showValue() {
  //   value = searchInput.innerHTML;
  result.innerHTML = searchInput.value;
  setTimeout(function () {
    thanks.innerHTML = `Your result is: ${searchInput.value}`;
  }, 2000);
  //   console.log(value);
}
// showValue();
searchInput.addEventListener("keyup", showValue);
