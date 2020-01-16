document.addEventListener("DOMContentLoaded", () => {
  let counter = document.querySelector("#counter");
  // running counter
  var nIntervId;
  function runTimer() {
    nIntervId = setInterval(plusOne, 1000);
  }

  function stopTimer() {
    clearInterval(nIntervId);
  }

  function plusOne() {
    let counterNum = parseInt(counter.innerText, 10);
    let counterIncr = counterNum + 1;
    counter.innerText = counterIncr.toString();
  }

  //decrement counter
  let minus = document.querySelector("#minus");
  minus.addEventListener("click", function(e){
    let counterNum = parseInt(counter.innerText, 10);
    let counterDecr = counterNum - 1;
    counter.innerText = counterDecr.toString();
  });

  //increment counter
  let plus = document.querySelector("#plus");
  plus.addEventListener("click", function(e){
    let counterNum = parseInt(counter.innerText, 10);
    let counterIncr = counterNum + 1;
    counter.innerText = counterIncr.toString();
  });

  //pause and resume counter
  let stopStart = document.querySelector("#pause");
  stopStart.addEventListener("click", function(e){
    if (stopStart.innerText == "pause") {
      clearInterval(nIntervId);
      plus.setAttribute("disabled", "");
      minus.setAttribute("disabled", "");
      heart.setAttribute("disabled", "");
      b.setAttribute("disabled", "");
      stopStart.innerText = "resume";
    } else if (stopStart.innerText == "resume") {
      runTimer();
      plus.removeAttribute("disabled");
      minus.removeAttribute("disabled");
      heart.removeAttribute("disabled");
      b.removeAttribute("disabled");
      stopStart.innerText = "pause";
    }
  });

  //likes
  let heart = document.querySelector("#heart");
  heart.addEventListener("click", function(e){
    let num = 1;
    if (document.getElementById(`${counter.innerText}`)) {
      let li = document.getElementById(`${counter.innerText}`);
      let span = li.querySelector("span");
      let num = parseInt(span.innerText, 10);
      num ++;
      li.innerHTML = `${counter.innerText} has been liked <span>${num}</span> times.`
      console.log("hit it!");
    } else {
      let like = document.createElement("text");
      like.innerHTML = `${counter.innerText} has been liked <span>${num}</span> time.`
      let ul = document.querySelector("ul.likes");
      let li = document.createElement("li");
      li.id = counter.innerText;

      li.appendChild(like);
      ul.appendChild(li);
    }

  });

  //comments
  let b = document.querySelector("button#submit");
  let form = document.querySelector("#comment-form");
    form.addEventListener("submit", function(event){
    let input = form.querySelector("input#comment-input");
    let div = document.querySelector("div#list");

    let p = document.createElement("p");
    p.innerText = input.value;
    div.appendChild(p);

    event.preventDefault();
    input.value = "";
  })


  runTimer();

});

