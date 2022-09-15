

function post(){
    a = document.getElementsByTagName("input")[0].value
    $('.here').append('<div class="item"><input type="checkbox" class="box"><div class="word">'+a+'</div></div>')

}