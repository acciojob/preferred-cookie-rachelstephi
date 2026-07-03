//your JS code here. If required.
const form = document.getElementById("settings-form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const parts = cookie.split("=");

    if (parts[0] === name) {
      return parts[1];
    }
  }

  return null;
}

function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize);
    fontSizeInput.value = parseInt(fontSize);
  }

  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    fontColorInput.value = fontColor;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = fontSizeInput.value + "px";
  const fontColor = fontColorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

applyPreferences();