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

    window.setInterval(incrementCounter, 5000)

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
})

