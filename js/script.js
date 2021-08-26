let startBtn =document.querySelector('.start');
let exitBtn =document.querySelector('.exit');
let conBtn =document.querySelector('.continue');
let resBtn =document.querySelector('.restart');
let quitBtn =document.querySelector('.quit');
let nextBtn =document.querySelector('.nextBtn');
let inBox =document.querySelector('.infoBox');
let queBox =document.querySelector('.quizBox');
let resultBox =document.querySelector('.result_box');




startBtn.addEventListener('click', ()=>{
inBox.classList.add('active');
})



exitBtn.addEventListener('click', ()=>{
inBox.classList.remove('active');
})


conBtn.addEventListener('click', ()=>{
queBox.classList.add('showQbox');

})



quitBtn.addEventListener('click', ()=>{
resultBox.classList.remove('resHide');
})


nextBtn.addEventListener('click', ()=>{
resultBox.classList.add('resHide');
queBox.classList.remove('showQbox');
inBox.classList.remove('active');

})

resBtn.addEventListener('click', ()=>{
queBox.classList.add('showQbox');
resultBox.classList.remove('resHide');

})









