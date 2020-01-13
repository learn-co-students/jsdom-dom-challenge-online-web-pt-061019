document.addEventListener("DOMContentLoaded", () => {

  let counter = document.getElementById('counter')
  let count = setInterval(function() {
    counter.innerText++;}, 1000);

    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let heart = document.getElementById('heart')
    let pause = document.getElementById('pause')
    let submit = document.getElementById('submit')
    let list = document.getElementById('list')
    let likes = document.querySelector('.likes')
    let input = document.getElementById('comment-input')

    plus.addEventListener("click", function(e) {
      counter.innerText++;
    })

    minus.addEventListener("click", function(e) {
      counter.innerText--;
    })

    pause.addEventListener("click", function(e) {
      if (pause.innerText === "pause") {
        pause.innerText = "resume"
        clearInterval(count)
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        input.disabled = true;
        submit.disabled = true;
      }
      else {
        pause.innerText = "pause"
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        input.disabled = false;
        submit.disabled = false;
        count = setInterval(function() {
          counter.innerText++;}, 1000);
      }
    });

    heart.addEventListener("click", function(e){
      let obj = document.getElementById(`${counter.innerText}`);
      obj ? obj.children[0].innerText++ :
      likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} has been liked <span id=${counter.innerText}>1</span> times.</li>`
    });

    submit.addEventListener("click", function(e) {
      e.preventDefault();
      let comment = document.getElementById('comment-input').value
      list.innerHTML += `<li>${comment}</li>`
      document.querySelector('#comment-form').reset();
    });
});
