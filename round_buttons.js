let countEl = document.getElementById("count-el")
let count = 1

function increment() {
    count += 1;
    countEl.textContent = count

}

function decrement() {
    count -= 1;
    countEl.textContent = count
}