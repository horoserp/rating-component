const score = document.getElementById("score");
score.innerHTML = sessionStorage["score"];
sessionStorage.clear();
