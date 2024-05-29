

//toggle icon navbar


// let menuIcon=document.getElementById('menu-icon');
//  let navbar=document.querySelector('.navbar');

// menuIcon.onClick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// console.log('hi')
// }

// menuIcon.addEventListener(onClick = ()=>{

//     menuIcon.classList.toggle('bx-x');
//     // navbar.classList.toggle('.active');
    
// })


// const menubtn=document.querySelector("#menu-icon");
// const navLin=document.querySelector('.navbar');
// const navalink=document.querySelector(".navbar")

// menubtn.addEventListener('click',()=>{
//     navalink.classList.toggle('mobile-menu'); 
// })


const navbar=document.querySelector(".navbar");
const menubtn=document.getElementById("menu-icon");

menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('.active');
})




//scrolll section


let section=document.querySelectorAll('section');
let navLink=document.querySelectorAll('header');


window.onscroll =()=>{


    // scroll active navbar
    section.forEach(sec=>{
        let top=window.scrollY;
        let offerset=sec.offerset-100;
        let hight=sec.offersetHeight;
        let id= sec.getAttribute('id');
        if(top >=offerset && top<offerset +hight){
            navLink.forEach(link=>{
                links.classList.remove('active');
                document.querySelector('header nav a[ href*=' + id + ']').classList.add('active')
            })
        }
    })
    //STICKY HEADER


    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

}