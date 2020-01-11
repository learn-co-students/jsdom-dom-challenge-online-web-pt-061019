const counter = document.getElementById("counter");

const minusButton = document.getElementById("minus");
count = 0;
minusButton.onclick = function(){
    count -= 1;
    counter.innerHTML = count;
};

const addButton = document.getElementById("plus");
count = 0;
addButton.onclick = function(){
    count += 1;
    counter.innerHTML = count;
};

document.addEventListener("DOMContentLoaded", function(){
    counter.innerHTML = count++;
});