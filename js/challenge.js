document.addEventListener("DOMContentLoaded", () => {
    function incrementCounter() {
        const count = document.getElementById('counter')
        let num = parseInt(count.innerText) + 1
        count.innerText = num.toString()
    }

    function decrementCounter() {
        const countdown = document.getElementById('counter')
        let newNum = parseInt(countdown.innerText) - 1
        countdown.innerText = newNum.toString()
    }

    let count = window.setInterval(incrementCounter, 2000)

    let plus = document.getElementById('plus')
    plus.addEventListener('click', () => {
        incrementCounter()
    })

    let minus = document.getElementById('minus')
    minus.addEventListener('click', () => {
        decrementCounter()
    })

    let submitButton = document.querySelector('#submit')
    let commentList = document.querySelector('#list')
    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        let comment = document.querySelector('#comment-form > input[type=text]').value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector('#comment-form').reset()
    })

    let heart = document.getElementById('heart')
    let likes = document.querySelector('.likes')
    heart.addEventListener('click', (e) => {
        let obj = document.getElementById(`${counter.innerText}`)
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText} > ${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    })

    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)
            
            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
            submitButton.disabled = true
        }
        else {
            count = setInterval(function () {
                counter.innerText++
            }, 1000)
            pause.innerText = "pause"

            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            submitButton.disabled = false
        }
    })
})

