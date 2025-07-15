let card = document.querySelector(".card");
let txt1 = document.getElementById("task");
let txt2 = document.getElementById("date");
let adtask = document.getElementById("addTask");

let tasks = localStorage.getItem('TASKS') ? JSON.parse(localStorage.getItem("TASKS")) : [];
window.onload = () => Display()
function addTask() {
    Edits()
    let tname = txt1.value;
    let tdate = txt2.value;

    let obj = new Object();
    obj.Tname = tname;
    obj.Tdate = tdate;
    tasks.push(obj);
    localStorage.setItem("TASKS", JSON.stringify(tasks));

    txt1.value = "";
    txt2.value = "";
    Display()
}

function Display() {
    let locaTasks = JSON.parse(localStorage.getItem("TASKS"))
    let td = "";
    locaTasks.forEach((task,i) => {
        td += `<tr>
        <td><i>${i}</i> . ${task.Tname}</td> <td>${task.Tdate}</td> 
        <td><button id="delete" onclick="delTask(${i})">Delete</button></td></tr>`;
    })
    card.innerHTML = `<table> ${td}</table>`
}

function delTask(index) {
    let locaTasks = JSON.parse(localStorage.getItem("TASKS"))
    locaTasks.splice(index,1);

    let td = "";
    locaTasks.forEach((task,i) => {
        td += `<tr>${task.Tname} - ${task.Tdate} <button onclick="delTask(${i})">Delete</button></tr>`;
    })
    card.innerHTML = td;
    txt1.value = "";
    txt2.value = "";

    localStorage.setItem("TASKS",JSON.stringify(locaTasks))
    location.reload()
}

function Edits() {
    adtask.style.background = "blue";
    setTimeout(() => {
        adtask.style.background = "hsl(136, 94%, 26%)"; 
    },200)
}