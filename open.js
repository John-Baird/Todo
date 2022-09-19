

let todo = []
let todoShow = []
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
                
                todoShow.splice(i,1,'<div class="item"><input type="checkbox" class="box"><div class="word">'+todo[i]+'</div><div class="delete">🗑</div><div class="edit">✏️</div></div>')
                console.log(todoShow)
                
            }
            b = todoShow.length
            b = b-1;
            $('.here').append(todoShow[b])
        }
        
    });


    $('div').on('click','.delete', function(){
        d = this.parentElement
        console.log(d)
        console.log(d.innerText[0])
        e = d.innerText[0]
        todo.forEach(removeList)
        function removeList(item){
            if (item == e){
                
                f = todo.indexOf(item)
                todo.splice(f,1)
                todoShow.splice(f,1)
                console.log(todo)
                console.log(todoShow)
            }
        }
        d.remove()
        
    })



});




