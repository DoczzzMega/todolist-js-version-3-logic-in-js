/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
"use strict";
// this function is strict...

const form = document.querySelector('#form');
const input = document.querySelector('#taskInput');
const ul = document.querySelector('#tasksList');
const btnAllremove = document.querySelector('#removeDoneTasks');

let isDone = false;
const titlesArray = [];

form.addEventListener('submit', e => {
    e.preventDefault();
    addTask(input.value);
    titlesArray.forEach(item => renderTasks(item.title, item.id));
    input.value = '';
});

ul.addEventListener('click', e => {
    let currentEl = e.target;
    let currentTaskItem = currentEl.closest('.task-item');
    let valueOfDataAttr = currentEl.getAttribute('data-action');


    if (valueOfDataAttr == 'done') {
        // toggleBtnCompletedTask(currentEl);
        // toggleCompletedTask(currentTaskItem);
    }
    if (valueOfDataAttr == 'delete') {

        //deleteTask(currentTaskItem);
    }
    //sendTaskToStorage();
});

//btnAllremove.addEventListener('click', deleteAllCompletedTasks);


function addTask(task) {
    titlesArray.push({id: `${Date.now()}`, title: task, isComleted: false});
    console.log(titlesArray);
}

function renderTasks(task, dataId, classItem, classBtn) {
    const li = document.createElement('li');
    li.dataset.id = dataId;
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'task-item', `${classItem}`);
    li.innerHTML = `
                <span class="task-title">${task}</span>
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action ${classBtn}">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
    `;
    ul.append(li);
}


