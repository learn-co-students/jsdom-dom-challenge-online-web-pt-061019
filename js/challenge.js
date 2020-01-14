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

    const commentsContainer = document.getElementById('commentsContainer')

    const commentForm = document.getElementById('comment-form')
    
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const userInputField = e.target.querySelector('#comment-input')
        const userInputString = userInputField.value
        const commentPTag = document.createElement('p')
        commentPTag.textContent = userInputString

        commentsContainer.appendChild(commentPTag)
    
    })
})

