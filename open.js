

let todo = []
let todoShow = []
let todoCheck = []

function save() {
localStorage.setItem('todoCheck', JSON.stringify(todoCheck))
localStorage.setItem('todoShow', JSON.stringify(todoShow))
localStorage.setItem('todo', JSON.stringify(todo))
}


$(document).ready(function () {
    function load() {
    todo = JSON.parse(localStorage.getItem('todo'))
    todoCheck = JSON.parse(localStorage.getItem('todoCheck'))
    todoShow = JSON.parse(localStorage.getItem('todoShow'))
    for (let i = 0; i < todo.length; i++){
                
        $('.here').append(todoShow[i])
        document.getElementsByClassName('box')[i].checked = todoCheck[i]
        //console.log(todoShow)
        //console.log("item")
    }
    }
    
        if (localStorage.getItem("todo") !== null) {
            load()
            
          }
    
        $('.roww').on('click', 'button', function(){
        a = document.getElementsByTagName("input")[0].value;
        
            if (a !== ""){
                todo.push(a)
                //console.log(todo)
                todoAdd();
                
            }
        function todoAdd(){
            for (let i = 0; i < todo.length; i++){
                
                todoShow.splice(i,1,`<div class="item" data-id="${i}"><input type="checkbox" class="box"><div class="word">${todo[i]}</div><div class="delete">🗑</div><div class="edit">✏️</div></div>`)
                //console.log(todoShow)
                
            }   
            b = todoShow.length
            b = b-1;
            $('.here').append(todoShow[b])
        }
        save()
 
    });


    $('div').on('click','.delete', function(){
        d = this.parentElement
        let id = d.getAttribute("data-id")
        //console.log(id)
        //console.log(d.innerText[0])
        todo.splice(id,1)
        todoShow.splice(id,1)
        todoCheck.splice(id,1)
        d.remove()
        save()


    })

    $( document ).on( "change", ":checkbox", function () {
        for (i = 0; i < todo.length; i++) {
            o = document.getElementsByClassName('box')[i].checked
            
            todoCheck.splice(i,1,o)
           } 
        save()
      });
    
    $('.outer').on("click", ".navbar", function(){
        console.log("Clear")
        localStorage.clear()
    });



}); 




