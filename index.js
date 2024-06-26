const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===""){
        alert("you must enter something");
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)

        listContainer.appendChild(li)
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(event){
    if(event.target.tagName ==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask()