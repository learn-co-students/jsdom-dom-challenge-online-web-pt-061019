const counter = document.getElementById("counter");

const minusButton = document.getElementById("minus");
minusButton.onclick = function(){
    counter.innerHTML --;
};

const addButton = document.getElementById("plus");
addButton.onclick = function(){
    counter.innerHTML++;
};

document.addEventListener('DOMContentLoaded', function () {
    let timer = setInterval(function() {
        counter.innerHTML++;
    }, 1000); //starts timer

    const commentsList = document.getElementById('list')
    const commentForm = document.getElementById('comment-form')

    commentForm.addEventListener('submit', function(event) {
      event.preventDefault() //stop form from POSTING

      const userInputField = event.target.querySelector('#comment-input')
      const userInputString = userInputField.value
      const newComment = document.createElement('p')

      newComment.textContent = userInputString
      commentsList.appendChild(newComment)
  
    });

    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener('click', function(){
        if (pauseButton.innerText === "pause"){
            clearInterval(timer);
            minusButton.disabled = true;
            addButton.disabled = true;
            likeButton.disabled = true;
            this.innerText = "resume";
        }
        else {
            document.getElementById('minus').disabled = false;
            document.getElementById('plus').disabled = false;
            document.getElementById('heart').disabled = false;
            this.innerText = "pause"
            timer = setInterval(function() {
                counter.innerHTML++;
            }, 1000);
        }
    });

    const likeButton = document.getElementById("heart")
    let likeCounter = 1
    likeButton.addEventListener('click', function(){
        const likeList = document.querySelector(".likes")
        const newLike = document.createElement('li')
        newLike.textContent = `${counter.innerHTML} has ${likeCounter++} likes`
        likeList.appendChild(newLike);

    })

  });

  //let pauseButton = document.querySelector('#pause')
    
  //pauseButton.addEventListener('click', (e) => {
    //currentCount = counterEl.textContent;

    //if (pauseButton.innerText === "pause") {
    //    clearInterval(startCounting);
    //    document.getElementById('minus').disabled = true;
      //  document.getElementById('plus').disabled = true;
        //document.getElementById('heart').disabled = true;
      //  pauseButton.textContent = "resume";
    //} else {
      //  document.getElementById('minus').disabled = false;
      //  document.getElementById('plus').disabled = false;
     //   document.getElementById('heart').disabled = false;
     //   pauseButton.textContent = "pause";
     //   counter(); // or sertInetrval fucntion here
   // }
//})