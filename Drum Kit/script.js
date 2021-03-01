// let drum1 =document.querySelector('.w');
// drum1.onclick =()=>{
//     new Audio("sounds/tom-w.mp3").play();
// }
// drum1();

let drum = document.querySelectorAll('.drum');
drum.forEach(element=>{
    element.onclick=()=>{
        new Audio(`sounds/${element.value}.mp3`).play();
    }
})

document.addEventListener('keydown', keylog);
function keylog(e){
    if ( e.key=== 'w' || e.key=== 'a' || e.key=== 's' 
    ||e.key=== 'd' ||e.key=== 'j' ||e.key=== 'k' || e.key=== 'l'){
        new Audio(`sounds/tom-${e.key}.mp3`).play();
    }
    
}
