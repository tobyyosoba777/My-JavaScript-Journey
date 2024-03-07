let addTask = document.querySelector('#add-task');
let taskContainer = document.getElementById('task-container');
let inputTask = document.getElementById('input-task');

addTask.addEventListener("click", () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li')
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class = "fa-solid fa-check"></li>`
    checkBtn.classList.add('checkTask')
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML =  `<li class = "fa-solid fa-trash-can">`
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn)

    if(inputTask.value === '') {
        alert("Enter a Value")
    }
    else {
        taskContainer.appendChild(task)
    }

    inputTask.value = "";

    checkBtn.addEventListener("click", () => {
        checkBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener("click", (e) => {
        // e.stopPropagation()
        let target = e.target;
        target.parentElement.parentElement.remove()
    })

})