// AutoTimer
const counter = document.getElementById('counter');
let numOnCounter = parseInt(counter.innerText);
let timer = 0;

const autoIncrementCount = function () {
    timer = setInterval(function () {
        numOnCounter ++;
        console.log(numOnCounter)
        counter.innerText = numOnCounter.toString();
    }, 1000);
};
document.addEventListener('DOMContentLoaded', function() {
    autoIncrementCount()
});

// Pause Button
let pause = document.querySelector('button#pause');
let paused = false;
pause.addEventListener('click', function(e) {
    if (paused === false) {
        clearInterval(timer);
        paused = true;
        e.target.innerText = 'resume';
        minusbtn.disabled = true;
        plusbtn.disabled = true;
        heartbtn.disabled = true;
    } else {
        paused = false;
        e.target.innerText = 'pause';
        minusbtn.disabled = false;
        plusbtn.disabled = false;
        heartbtn.disabled = false;
        autoIncrementCount();
    }
});

// Minus & Plus Button
const minusbtn = document.querySelector('button#minus');
const plusbtn = document.querySelector('button#plus');

minusbtn.addEventListener('click', function() {
    counter.innerText --;
});

plusbtn.addEventListener('click', function() {
    counter.innerText ++;
});

// Heart Button; Like Counter
const heartbtn = document.querySelector('button#heart');
let showLikes = document.querySelector('ul');
let numlikes = [];

heartbtn.addEventListener('click', function() {
    let currentNum = counter.innerText;
    if (numlikes[currentNum]) {
        numlikes[currentNum] += 1
    } else {
        numlikes[currentNum] = 1
    }
    let li = document.createElement('li');
    let likeCount = numlikes[currentNum];
    li.innerText = `Number ${currentNum} has ${likeCount} likes`
    showLikes.appendChild(li)
});

// Add Comments:
let commentForm = document.getElementById('comment-form');
let commentInput = document.getElementById('comment-input');
let showComment = document.getElementById('list');

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = commentInput.value;
    showComment.appendChild(li);
    event.target.reset();
}, false);


