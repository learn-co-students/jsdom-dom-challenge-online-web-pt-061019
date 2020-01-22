let counter = document.getElementById("counter");
let likesHash = {}; 

document.addEventListener("DOMContentLoaded", () => {
  let timer = setInterval(function() {
    counter.innerHTML++
  }, 1000);

  let minusButton = document.getElementById('minus');
  minusButton.addEventListener('click', function() {
    counter.innerHTML--
  });

  let plusButton = document.getElementById('plus');
  plusButton.addEventListener('click', function() {
    counter.innerHTML++
  });

  let likeButton = document.getElementById('heart');
  likeButton.addEventListener('click', function() {
    let likeList = document.querySelector(".likes")
    let newLike = document.createElement("li") 
    let number = counter.innerHTML
    if (likesHash[number])
      likesHash[number]++ 
    else 
      likesHash[number] = 1 
    newLike.textContent = `${counter.innerHTML} has ${likesHash[number]} like!`
    likeList.appendChild(newLike)
  });

  let pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('click', function() {
    if (pauseButton.innerText === 'pause') {
      clearInterval(timer)
      minusButton.disabled = true;
      plusButton.disabled = true; 
      likeButton.disabled = true;
      pauseButton.innerText = 'resume'; 
    }
    else {
      minusButton.disabled = false;
      plusButton.disabled = false; 
      likeButton.disabled = false;
      pauseButton.innerText = 'pause'; 
      let timer = setInterval(function() {
        counter.innerHTML++
      }, 1000);
    };
  });
  let commentsList = document.getElementById('list');
  let commentsForm = document.getElementById('comment-form');
  commentsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let userInputField = e.target.querySelector('#comment-input'); 
    let userInputString = userInputField.value;
    let newComment = document.createElement('li');
    newComment.textContent = userInputString; 
    commentsList.appendChild(newComment); 
  });
});