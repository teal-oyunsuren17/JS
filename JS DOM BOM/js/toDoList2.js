const taskListEl = document.getElementById('taskList');
const taskInputEl = document.getElementById('taskInput');

setInterval(now, 1000)
function now() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if(hour<10) hour = "0" + date.getHours();
    if(minutes<10) minutes = "0" + date.getMinutes();
    if(seconds<10) seconds = "0" + date.getSeconds();

    let time =year + 'он  ' + month + 'сарын  ' + day + '  '+ hour + ':' + minutes + ':' + seconds ;
    document.getElementById('date').innerHTML = time;
}
now();


function updateCount() {
    document.getElementById('taskCount').innerHTML = 'Танд ' + document.querySelectorAll('#taskList .card').length + ' хийх ажил үлдлээ';
}


function newTask() {
    let now = new Date().getTime();
    const taskString = `<div class="card mb-2" id="${now}">
                <div id="list" class="card-body row">
                    <div id="${now}" class="col-9">${taskInputEl.value}</div>
                    <div class="col-3">
                        <button class="btn text-primary" onclick="editTask(${now})"><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn text-primary" onclick="saveTask(${now})"><i class="bi bi-save-fill"></i></button>
                        <button class="btn text-warning" onclick="toggleDone(${now})"><i class="bi bi-check-lg"></i></button>
                        <button class="btn text-danger" onclick="removeTask(${now})"><i class="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>`
    taskListEl.innerHTML = taskString + taskListEl.innerHTML;
    taskInputEl.value ='';

    updateCount();
}


function editTask(id) {
    document.getElementById(id).classList.add('editing');
}

function saveTask(id) {
    const inputEl = document.querySelector(`#${id} input`);
    const taskTextEl = document.querySelector()
}


function toggleDone(id) {
   const taskEl= document.getElementById(id);
   if (taskEl.classList.contains('done')) 
   taskEl.classList.remove('done');
   else {
    taskEl.classList.add('done');
   }
}


function removeTask(id) {
    if (confirm('ustgah uu?')) {
        document.getElementById(id).remove();
    }
    updateCount();
}
