let sectionList = ["intro", "portfolio", "experience", "education"];
let lastItem = "intro";
let debounce = new Date().getTime();

function SelectSection(selected) {
  let current = new Date();
  if (current - debounce < 500) return;
  debounce = current;
  let el = document.getElementById(selected);

  el.style.zIndex = 210;
  el.style.animation = "0.5s slideIn";
  let unselected = sectionList.filter((item) => item !== selected);
  setTimeout(
    () =>
      unselected.forEach((item) => {
        document.getElementById(item).style.animation = "0.01s slideOut";
      }),
    490
  );
  unselected.forEach((item) => {
    document.getElementById(item).style.zIndex = 100;
  });
  document.getElementById(lastItem).style.zIndex = 109;
  el.style.zIndex = 110;
  lastItem = selected;
}
let startDate = new Date("04/28/2022");
let graduationDate = new Date("12/07/2020");
document.getElementById("days").innerHTML = Math.floor(
  (debounce - startDate) / (3600 * 1000 * 24)
);
document.getElementById("days2").innerHTML = Math.floor(
  (debounce - graduationDate) / (3600 * 1000 * 24)
);
