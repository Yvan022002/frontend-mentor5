fetch("data.json").then((response) => {
    if(!response.ok) return console.log("une error s'est passe")
        return response.json()
}
).then((data)=>{
    chargerData(data)
})

function chargerData(data){
    let timeFrameBtn=document.querySelectorAll(".down p");

   let todos=document.querySelector(".todos")
   let todosDisplay=todos.querySelectorAll(".todo-item-display .inner")
 
    data.map((todo)=>{
        todo.changeState = (time)=>{
           var display=document.getElementById(todo.title)
           
           switch (time) {
            case "Daily":
               display.innerHTML= `<div class="flex">
                <p>${todo.title}</p>
                <img src="images/icon-ellipsis.svg" alt="">
              </div>
              <h2>${todo.timeframes.daily.current}hrs</h2>
              <p>Yesterday - ${todo.timeframes.daily.previous}hrs</p>`
                break;
           
            case "Weekly":
                display.innerHTML= `<div class="flex">
                <p>${todo.title}</p>
                <img src="images/icon-ellipsis.svg" alt="">
              </div>
              <h2>${todo.timeframes.weekly.current}hrs</h2>
              <p>Last Week - ${todo.timeframes.weekly.previous}hrs</p>`
                break;
            default:
                display.innerHTML= `<div class="flex">
                <p>${todo.title}</p>
                <img src="images/icon-ellipsis.svg" alt="">
              </div>
              <h2>${todo.timeframes.monthly.current}hrs</h2>
              <p>Last Month - ${todo.timeframes.monthly.previous}hrs</p>`
              break;
           }
        }
    })
    
    
    timeFrameBtn.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            data.forEach((todo)=>{
                todo.changeState(e.target.textContent)
            })
        })
    })
}


