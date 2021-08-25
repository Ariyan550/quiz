let startBtn =document.querySelector('.start');
let exitBtn =document.querySelector('.exit');
let inBox =document.querySelector('.infoBox');

startBtn.addEventListener('click', ()=>{
inBox.classList.add('active');
})

exitBtn.addEventListener('click', ()=>{
inBox.classList.remove('active');
})











