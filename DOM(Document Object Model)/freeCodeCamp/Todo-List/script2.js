const addTask = document.querySelector('#add-task')
const inputTask = document.querySelector('#input-task')
const taskContainer = document.querySelector('#task-container');

addTask.addEventListener("click", () => {
    let task = document.createElement('div');
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
})