const counter = document.getElementById("counter");
let likesHash = {};

document.addEventListener('DOMContentLoaded', function () {
    let timer = setInterval(function() {
        counter.innerHTML++;
    }, 1000); //starts timer

    const minusButton = document.getElementById("minus");
    minusButton.addEventListener('click', function() {
        counter.innerHTML--;
    });

    const addButton = document.getElementById("plus");
    addButton.addEventListener('click', function() {
        counter.innerHTML++;
    });


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
    likeButton.addEventListener('click', function(){
        const likeList = document.querySelector(".likes")
        const newLike = document.createElement('li')
        let second = counter.innerHTML
        
        if (likesHash[second])
            likesHash[second]++
        else 
            likesHash[second] = 1
        newLike.textContent = `${counter.innerHTML} has ${likesHash[second]} likes`
        likeList.appendChild(newLike)
    });

  });
