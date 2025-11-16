let darkMode = false;
const body = document.body;
const pref = document.getElementById("pref");
const header = document.header;

function toggleMode() {
  darkMode = !darkMode;
  if (!darkMode) {
    body.style.backgroundColor = "rgba(54, 26, 68, 1)";
    body.style.color = "rgb(210, 225, 245)";
  } else {
    body.style.backgroundColor = "rgb(210, 225, 245)";
    body.style.color = "rgba(54, 26, 68, 1)";
  }
}
toggleMode();

pref.addEventListener("click", toggleMode);
