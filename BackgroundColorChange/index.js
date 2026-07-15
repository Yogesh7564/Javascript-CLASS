let colors=["white","red","blue","green","yellow","pink","cyan"];
let length=colors.length-1

let buttonControl=document.getElementById('btn')
let spanControl=document.querySelector('.color')

buttonControl.addEventListener('click',()=>{
    // alert("hello welcome")
    let index=RandomIndex()
     document.body.style.backgroundColor=colors[index]
     spanControl.textContent=colors[index]
})

function RandomIndex(){
    return  Math.trunc(Math.random()*length)
}