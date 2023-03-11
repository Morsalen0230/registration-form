let submit= document.querySelector('#button')  
  let alertBox= document.querySelector('#box')  
  let ok= document.querySelector('#ok')  
  let container= document.querySelector('.container')  
submit.addEventListener('click',myFunction)
  ok.addEventListener('click',myFunction1)
  
 function myFunction(e){
   e.preventDefault()
  alertBox.classList.add('alert-box');
   
   alertBox.classList.remove('hide')
   
let red = Math.floor(Math.random() * (255 - 0) + 1) + 0;
let green = Math.floor(Math.random() * (255 - 0) + 1) + 0;
let blue = Math.floor(Math.random() * (255 - 0) + 1) + 0;

container.style.backgroundColor=`rgb(${red},${green},${blue})`;
console.log(`rgb(${red},${green},${blue})`)

 }
 
 function myFunction1(){
   alertBox.classList.add('out')
   container.style.backgroundColor='rgb(36,36,50)';
   alertBox.addEventListener('animationend',()=>{
     alertBox.classList.add('hide');
     window.location.reload();
     
   })
 }