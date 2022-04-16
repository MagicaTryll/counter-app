let countEl = document.getElementById("count-el")
let count = 1

const = colors["red", "blue", "green", "black", "brown", "hotpink", "pink", "silver", "purple"];
const randColor = colors[Math.floor(Math.random() * colors.length)];// standard syntax

function increment() {
    count += 1;
    countEl.textContent = count
    if (count%10===0){
            document.getElementById("color-el").style.background = randColor;
        }

}

function decrement() {
    count -= 1;
    countEl.textContent = count
}

