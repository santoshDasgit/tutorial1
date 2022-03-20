
var sidebar = document.querySelector(".sidenav");


let menu = document.querySelector('.mnav .bar i');
let menuIcon = document.querySelector(".mnav .bar i")

let x ='b';





menu.addEventListener('click',function(){
if (x=='b'){
    sidebar.style.display = 'block';
    x='n';
    menuIcon.setAttribute('class','fas fa-times manu')
}else if(x=='n'){
    sidebar.style.display = 'none';
    menuIcon.setAttribute('class','fas fa-caret-downfas fa-caret-down')
    x='b';
}

})

// for structure change 
let structure = document.querySelector('.container-fluid .row')
structure.children[0].classList.remove('col-md-2')
structure.children[0].classList.add('col-md-3')
structure.children[2].classList.remove('col-md-3')
structure.children[2].classList.add('col-md-2')


// for border remove 
let subx = document.querySelector('.subjects')
subx.classList.remove('border')




// For Nav  Responsive Navbar 

let side = "left"

let subDiv = document.querySelector('.mnav nav .itemdiv')
let barBtn = document.querySelector('.headernav nav .logo #menu')
let barIcon = document.querySelector('.headernav nav .logo #menu a i')
let mDiv = document.querySelector('.mnav')




barBtn.addEventListener('click', function () {
    if (side == "left") {
        subDiv.style.left = '0%'
        mDiv.style.position = "relative"
       barIcon.setAttribute('class','fas fa-times')
        side = "right"
    } else if (side == "right") {
        subDiv.style.left = '-70%'
        // alert('ok')
        // subDiv.style.position="sticky"
        mDiv.style.position = "sticky"
        barIcon.setAttribute('class','fas fa-bars')
        console.log(side)
        side = "left"
    }
})

