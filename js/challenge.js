let counter = document.getElementById('counter')
let timer = setInterval(increaseCounter, 1000)
let plusButton = document.getElementById('plus')
let minusButton = document.getElementById('minus')

function increaseCounter(){
    counter.innerText = parseInt(counter.innerText) + 1;
}

plusButton.addEventListener('click', function() {
    increaseCounter()
})

function decreaseCounter(){
    counter.innerText = parseInt(counter.innerText) - 1;
}

minusButton.addEventListener('click', function() {
    decreaseCounter()
})

let heartButton = document.getElementById('heart')
let pauseButton = document.getElementById('pause')

function pauseCounter() {
    if (pauseButton.innerText == 'pause') {
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        clearInterval(timer);
    } else {
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        timer = setInterval(increaseCounter, 1000);
    }
}

pauseButton.addEventListener('click', function() {
    pauseCounter();
})

let arrayOfLikes = []
let likesUl = document.querySelector(".likes")

heartButton.addEventListener('click', function() {
    let number = counter.innerHTML
    if (arrayOfLikes[number]) {
        arrayOfLikes[number] += 1
    } else {
        arrayOfLikes[number] = 1
    }

    let li = document.createElement('li')
    li.id = number

    let likeSentence = document.createTextNode(`${number} has received ${arrayOfLikes[number]} likes`)

    if (document.getElementById(number)) {
        document.getElementById(number).remove();
    };

    li.appendChild(likeSentence)
    likesUl.appendChild(li)

})

let submit = document.getElementById('submit')
let commentsList = document.getElementById('list')

submit.addEventListener('click', function(e){
    e.preventDefault()

    let item = document.querySelector('input').value
    let li = document.createElement('li')
    li.innerHTML = item
    commentsList.appendChild(li)

    document.querySelector('input').value = ""
}) 