window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.classList.add("hide");
  setTimeout(function () {
    loader.style.display = "none";
  }, 500); // adjust this value to control how long the loader stays visible
});
