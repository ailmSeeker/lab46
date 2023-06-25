let form = document.getElementById("done");

document.getElementById('create-task-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let data = document.querySelector("#new-task-description").value
    let list = document.getElementById('list') 
     
    const li = document.createElement("li");
    li.innerText = data;
    list.appendChild(li);
})    

