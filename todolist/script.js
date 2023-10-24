const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask() {
  if (inputBox.value === "") {
    return alert("You must write something")
  }
  let li = document.createElement("li")
  li.innerHTML = inputBox.value
  listContainer.appendChild(li)

  let span = document.createElement("span")
  span.innerHTML = "\u00d7"
  li.appendChild(span)
  saveData()

  inputBox.value = ""
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask()

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    document.getElementById('form-button').click()
  }
}
handleKeyPress()