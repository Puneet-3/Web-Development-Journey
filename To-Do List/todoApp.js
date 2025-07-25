let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.classList.add("new-task"); // Add animation class
    
    // Create task text span
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.innerText = inp.value;
    item.appendChild(taskSpan);
    
    // Create delete button
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "DELETE";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Item deleted");
    }
});