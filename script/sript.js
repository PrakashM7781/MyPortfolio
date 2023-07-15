const bars = document.querySelectorAll(".graph-bar");
bars.forEach((bar) => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});
