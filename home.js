let count = 0

let countVariable = document.getElementById("count-var")
let prevCountVariable = document.getElementById("prev-count-var")
let countButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")

countButton.addEventListener("click", incr)
saveButton.addEventListener("click", save)


function incr() {
    count += 1
    countVariable.innerText = count
}

function save() {
    prevCountVariable.innerText = count
    count = 0
    countVariable.innerText = count
}
