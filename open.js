

let todo = []
let todoShow = []
let todoCheck = []
$(document).ready(function () {

    $('.roww').on('click', 'button', function(){
        a = document.getElementsByTagName("input")[0].value;
        
            if (a !== ""){
                todo.push(a)
                console.log(todo)
                todoAdd();
                
            }
        function todoAdd(){
            for (let i = 0; i < todo.length; i++){
                
                todoShow.splice(i,1,`<div class="item" data-id="${i}"><input type="checkbox" class="box"><div class="word">${todo[i]}</div><div class="delete">🗑</div><div class="edit">✏️</div></div>`)
                console.log(todoShow)
                
            }   
            b = todoShow.length
            b = b-1;
            $('.here').append(todoShow[b])
        }
        todo.forEach(checkmark)
    });


    $('div').on('click','.delete', function(){
        d = this.parentElement
        let id =d.getAttribute("data-id")
        console.log(id)
        console.log(d.innerText[0])
        todo.splice(id,1)
        todoShow.splice(id,1)
        d.remove()

        todo.forEach(checkmark)

    })
    
    function checkmark(item){           
        o = document.getElementsByClassName('box')[todo.indexOf(item)]
        console.log(o.checked)
        todoCheck.splice(todo.indexOf(item),1,o.checked)
    }

});




