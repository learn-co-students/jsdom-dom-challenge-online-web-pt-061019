const counter = document.getElementById("counter");

const minusButton = document.getElementById("minus");
minusButton.onclick = function(){
    counter.innerHTML --;
};

const addButton = document.getElementById("plus");
addButton.onclick = function(){
    counter.innerHTML++;
};

const likeButton = document.getElementById("heart")

const pauseButton = document.getElementById("pause")


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
      const newComment = document.createElement('li')

      newComment.textContent = userInputString
      commentsList.appendChild(newComment)
  
    });
  });