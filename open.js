let list = []
let listDiv = []
let selectorArray = []
let selector = ''
// add a selector list and have it work the same as the check list so that it saves when you click on a different list after reload
let todo = []
let todoShow = []
let todoCheck = []

function save() {
selectorArray = selectorArray.filter(element => {return element !== ''})
localStorage.setItem('todoCheck', JSON.stringify(todoCheck))
localStorage.setItem('todoShow', JSON.stringify(todoShow))
localStorage.setItem('todo', JSON.stringify(todo))
localStorage.setItem('list', JSON.stringify(list))
localStorage.setItem('listDiv', JSON.stringify(listDiv))
localStorage.setItem('selectorArray', JSON.stringify(selectorArray))
}


$(document).ready(function () {
    function load() {
   $('.item').remove()
   $('.list-item').remove()
    todo = JSON.parse(localStorage.getItem('todo'))
    todoCheck = JSON.parse(localStorage.getItem('todoCheck'))
    todoShow = JSON.parse(localStorage.getItem('todoShow'))
    list = JSON.parse(localStorage.getItem('list'))
    listDiv = JSON.parse(localStorage.getItem('listDiv'))
    selectorArray = JSON.parse(localStorage.getItem('selectorArray'))
    
    if (todo.length !== 0){
        for (let i = 0; i < todo.length; i++){
                    
            $('.here').append(todoShow[i])
            document.getElementsByClassName('box')[i].checked = todoCheck[i]
            //console.log(todoShow)
            //console.log("item")
        }}
    if (list.length !== 0){
        for (let i = 0; i < list.length; i++){
            $('.lists').append(listDiv[i])
        }
    }
    todoAdd()
    }
    
        if (localStorage.getItem("todo") !== null) {
            load()
            
          }
    
        $('.roww').on('click', 'button', function(){
        a = document.getElementsByTagName("input")[1].value;
        j = todo.length
        selectorArray.splice(j,1,selector)
            if (a !== ""){
                todo.push(a)
                //console.log(todo)
                todoAdd();
                
            }
        function todoAdd(){
            for (let i = 0; i < todo.length; i++){

                todoShow.splice(i,1,`<div class="item `+selectorArray[i]+`" data-id="${i}"><input type="checkbox" class="box"><div class="word">${todo[i]}</div><div class="delete">🗑</div><div class="edit">✏️</div></div>`)
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
        console.log(id)
        console.log(d.innerText[0])
        console.log(todo)

        if(todo.length == 1){
            todo = []
            todoShow = []
            todoCheck = []
            selectorArray = []
        }

        todo.splice(id,1)
        todoShow.splice(id,1)
        todoCheck.splice(id,1)
        selectorArray.splice(id,1)
        console.log(todo)
        d.remove()
        
        todoShow = []
        for (let i = 0; i < todo.length; i++){
                
            todoShow.splice(i,1,`<div class="item `+selectorArray[i]+`" data-id="${i}"><input type="checkbox" class="box"><div class="word">${todo[i]}</div><div class="delete">🗑</div><div class="edit">✏️</div></div>`)
            
        } 
        save()
        todo = []
        todoShow = []
        todoCheck = []
        
        load()
        console.log("The selector is"+selector)
        
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
        location.reload()
    });

    $('.list').on('click', 'button', function(){
        e = document.getElementsByTagName("input")[0].value;
        console.log(e)
        if (e !== ""){
            list.push(e)
            slot()
        }
        save()
    });
    function slot(){
        for (let i = 0; i < list.length; i++){
                
            listDiv.splice(i,1,`<div class="list-item" list-data-id="${i}"><div class="name">${list[i]}</div><div class="trash">🗑</div><div class="edit">✏️</div></div>`)
            
            
        }   
        e = listDiv.length
        e = e-1;
        $('.lists').append(listDiv[e])
    }
    $('div').on('click','.trash', function(){
        f = this.parentElement
        let id = f.getAttribute("list-data-id")
        console.log("index is "+id)
        //console.log(d.innerText[0])
        $('.'+id).remove()
        for (let i = 0; i < selectorArray.length; i++){
            if (selectorArray[i] > id){
                
                selectorArray[i] = parseInt(selectorArray[i]) - 1
                selectorArray[i] = (selectorArray[i]).toString()
               // selectorArray[i] = selectorArray[i]-1
               
            }
            else{
                if (selectorArray[i] == id){
                todo.splice(i,1) 
                todoShow.splice(i,1)
                todoCheck.splice(i,1)
                
                selectorArray.splice(i,1,'')
                
                }
            }
            
            ///ERRRORS SOMEWHERE

        }


        if(list.length == 1){
            list = []
            listDiv = []

        }
        list.splice(id,1)
        listDiv.splice(id,1)
        f.remove()
        listDiv =[]
        for (let i = 0; i < list.length; i++){
                
            listDiv.splice(i,1,`<div class="list-item" list-data-id="${i}"><div class="name">${list[i]}</div><div class="trash">🗑</div><div class="edit">✏️</div></div>`)
            
        } 
        
        save()
        listDiv = []
        list = []
        load()
        if (list.length !== 0){
        document.getElementsByClassName("name")[selector-1].click()
        }
    })
    

    if (selector == ''){
        $('div#hider').addClass('hide')
    }
    else {
        $('div#hider').removeClass('hide')
    }


    $('div').on('click', '.name', function(){
        q = this.parentElement
        let idl = q.getAttribute("list-data-id")
        console.log(idl)
        selector = idl
        console.log(selector)
        $('div#hider').removeClass('hide')
        sort()
        
    })

    function sort(){
        
        zl = document.getElementsByClassName('item').length

        for (let i = 0; i < zl; i++){
            z = document.getElementsByClassName('item')[i]
            if (z.classList.contains(selector)){
                z.classList.remove('hide')
            }
            else{
                z.classList.add('hide')
            }
        }
    }

    $('body').on('click', '.edit', function(){
        //y = this.parentElement
        //y.push('<input type="input" class="field" id="list">')
        console.log("edit")
    })
    
}); 

