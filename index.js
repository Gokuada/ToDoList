const input = document.getElementById("input");
const container = document.getElementById("list-container")
console.log(container)

function addTask() {

    if (input.value === '') {
        alert ('Vous devez écrire quelque chose ')
    } else {
        let li= document.createElement('li');
        li.innerHTML= input.value;
        container.appendChild(li); 
    }
    input.value=""
    console.log(addTask)  
}