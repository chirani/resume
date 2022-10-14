let sectionList = ["intro", "portfolio", "experience", "education"];
let lastItem = "intro";
let debounce = new Date().getTime();
//console.log(Date().getTime());
function SelectSection(selected) {
  let current = new Date();
  if (current - debounce < 1000) return;
  debounce = current;
  let el = document.getElementById(selected);

  el.style.zIndex = 210;
  el.style.animation = "1s slideIn";
  let unselected = sectionList.filter((item) => item !== selected);
  setTimeout(
    () =>
      unselected.forEach((item) => {
        document.getElementById(item).style.animation = "0.01s slideOut";
      }),
    900
  );
  unselected.forEach((item) => {
    document.getElementById(item).style.zIndex = 100;
  });
  document.getElementById(lastItem).style.zIndex = 109;
  el.style.zIndex = 110;
  console.log(unselected);
  lastItem = selected;
  console.log(info);
}
