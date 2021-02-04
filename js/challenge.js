document.addEventListener("DOMContentLoaded", () => {

  // Elements
  const counter = document.querySelector("#counter")
  const minusBtn = document.querySelector("button#minus")
  const plusBtn = document.querySelector("button#plus")
  const heartBtn = document.querySelector("button#heart")
  const pauseBtn = document.querySelector("button#pause")
  const form = document.querySelector("form#comment-form")
  const submitBtn = document.querySelector("button#submit")

  counter.innerText = parseInt(counter.innerText)


  // Increase time
  const incrementCounter = () => {
    counter.innerText++
  }


  // Decrease time
  const decrementCounter = () => {
    counter.innerText--
  }


  // 'Like' a time
  let numbersLiked = []

  const likeCounterNum = () => {
    const ul = document.querySelector("ul.likes")
    const li = document.createElement("li")

    let counterNum = counter.innerText
    let likes = 0

    numbersLiked.push(counterNum)    

    for(let i = 0; i < numbersLiked.length; i++) {     
      if(numbersLiked[i] == counterNum) {
        likes++
      }
    }    

    if(likes > 1) {
      li.innerText = `${counter.innerText} has been liked ${likes} times.`
    }
    else {
      li.innerText = `${counter.innerText} has been liked 1 time.`
    }

    ul.appendChild(li)
  }


  // Pause the counter
  const pauseCounter = () => {
    if (pauseBtn.innerText === "pause"){
      clearInterval(autoCount);
      minusBtn.disabled = true
      plusBtn.disabled = true
      heartBtn.disabled = true
      submitBtn.disabled = true
      pauseBtn.innerText = "resume"
    }
    else {
      minusBtn.disabled = false
      plusBtn.disabled = false
      heartBtn.disabled = false
      submitBtn.disabled = false
      pauseBtn.innerText = "pause"
      setInterval(incrementCounter, 1000)
    }
  }

  
  // Add a comment
  const addComment = (event) => {
    event.preventDefault()
    let p = document.createElement("p")
    let commentsContainer = document.querySelector("#list.comments")
    let input = form.querySelector("#comment-input")

    p.textContent = input.value
    commentsContainer.appendChild(p)
    form.reset()
  }


  // Event listeners
  const autoCount = setInterval(incrementCounter, 1000)
  minusBtn.addEventListener("click", decrementCounter)
  plusBtn.addEventListener("click", incrementCounter)
  heartBtn.addEventListener("click", likeCounterNum)
  pauseBtn.addEventListener("click", pauseCounter)
  form.addEventListener("submit", addComment)
})

