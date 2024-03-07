const addTask = document.querySelector('#add-task')
const inputTask = document.querySelector('#input-task')
const taskContainer = document.querySelector('#task-container');

addTask.addEventListener("click", () => {
    let task = document.createElement('div');
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class = "fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class = "fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value === "") {
        alert("Cannot be Blank");
    }
    else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkBtn.addEventListener("click", () => {
        if(li.style.textDecoration === "none") {
            li.style.textDecoration = "line-through"
        }
        else {
            li.style.textDecoration = "none"
        }
    })

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        let target = e.target;
        target.parentElement.remove();
    })

})