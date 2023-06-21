const input = document.getElementById("input");
const container = document.getElementById("list-container")
console.log(container)

function addTask() {

    if (input.value === '') {
        alert ('Vous devez écrire quelque chose ')
    } else {
        let li= document.createElement("li");
        li.innerHTML= input.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
     
}
container.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();