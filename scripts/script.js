const input_todo = document.getElementById("input_todo")
//const add_todo = document.getElementById("add_todo")
const list = document.getElementById("list")
function save(){
				localStorage.setItem("todo_save", list.innerHTML)
}
function load(){
				let data = localStorage.getItem("todo_save")
				console.log(data)
				list.innerHTML = data
}
function remove_todo(obj){
				obj.parentElement.remove()
				save()
}

function add_todo(cus=""){
				let txt = cus ? cus:input_todo.value
				let id = list.childElementCount
				let todo = document.createElement("li")
				todo.innerHTML = `<input type="checkbox" id="todo${id}"><label class="todo${id}" for="todo${id}"><span>${txt}</span></label><button onclick="remove_todo(this)">x</button>`
				list.appendChild(txt ? todo : "")
				save()
				input_todo.value = ""
}

load()
list.childElementCount == 0 ? add_todo("Xin chào! Đây là một ví dụ.") : ""

