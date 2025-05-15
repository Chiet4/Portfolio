window.addEventListener("scroll", function () {
  const menu = document.querySelector(".menu-fixo");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  let newColor = "";

  if (scrollPercent < 33) {
    newColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--cor1"
    );
  } else if (scrollPercent < 66) {
    newColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--cor3"
    );
  } else {
    newColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--cor2"
    );
  }

  menu.style.backgroundColor = newColor.trim();
});

