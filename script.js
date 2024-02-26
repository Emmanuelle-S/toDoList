let tache = [
  { nom: "faire la vaisselle", difficulte: "facile"
} ,

{ nom: "faire du sport", difficulte: "moyenne"
} ,



];

console.log(tache);

let html = document.getElementById("content")

console.log(content);

content.innerHTML = `${tache[0].nom} ${tache[0].difficulte}` 

// let button = document.getElementById("button")
// let ul = document.getElementById("ul")

console.log(ul);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.classList.add("li")

        const croix = document.createElement('span');
        croix.textContent = 'x'

        croix.classList.add("croix") //creation d'une class css croix 
        



   
        croix.onclick = function() {
            li.remove();
        };

        li.appendChild(croix);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
}

