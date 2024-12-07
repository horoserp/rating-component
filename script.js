const ratings = document.getElementsByClassName("number");
const submitButton = document.getElementsByClassName("submit");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    if (current[0]) {
      current[0].className = current[0].className.replace(" active", "");
    }
    ratings[i].className += " active";
    sessionStorage.setItem("score", ratings[i].value);
  });
}

submitButton[0].addEventListener("click", () => {
  window.location.href = "./thank-you.html";
});
