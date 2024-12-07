const ratings = document.getElementsByClassName("number");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    var current = document.getElementsByClassName("active");
    if (current[0]) {
      current[0].className = current[0].className.replace(" active", "");
    }
    ratings[i].className += " active";
  });
}
