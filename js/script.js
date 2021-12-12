let optionList =document.querySelectorAll('.option');
let startBtn =document.querySelector('.start');
let exitBtn =document.querySelector('.exit');
let conBtn =document.querySelector('.continue');
let resBtn =document.querySelector('.restart');
let quitBtn =document.querySelector('.quit');
let infoBox =document.querySelector('.infoBox');
let queBox =document.querySelector('.quizBox');
let opList =document.querySelector('.optionList');
let timeInput =queBox.querySelector('.time_sec');
let time_line =queBox.querySelector('.time_line');
let audioOne =document.querySelector('.audioOne');
let audioTwo =document.querySelector('.audioTwo');


// start button clicked

startBtn.addEventListener('click', ()=>{ 
infoBox.classList.add('active');
}); //show info box


// exit button clicked

exitBtn.onclick =()=>{
infoBox.classList.remove('active'); //hide info box
}

// continue button clicked

conBtn.onclick =()=>{
infoBox.classList.remove('active'); //hide info box
queBox.classList.add('showQbox'); //show quizBox
showQuestion(0);
showFooter(1);
showTimer(15);
startTimerLine(0);
}




// getting quetions and options from array


let nextBtn =queBox.querySelector('.nextBtn');
let resultBox =document.querySelector('.result_box');
let quit_quiz =document.querySelector('.quit');
let timeLeft =document.querySelector('.timeLeft');



quit_quiz.onclick =()=>{
	window.location.reload();
}



let queCount =0;
let queNum =1
let counter;
let timeValue =15;
let widthValue =0;
let counterLine;
let userScor =0;




nextBtn.onclick =()=>{
nextBtn.style.display='none';

if(queCount < questions.length -1){
queCount++;
queNum++;
showQuestion(queCount);
showFooter(queNum);
clearInterval(counter);
showTimer(timeValue);
clearInterval(counterLine);
startTimerLine(widthValue);
timeLeft.textContent='Time Left';

}else{
	clearInterval(counter);
	clearInterval(counterLine);
	showResutBox();
}

}

function showResutBox(){
infoBox.classList.remove('active'); //hide info box
queBox.classList.remove('showQbox'); //show quizBox
resultBox.classList.add('resActive'); //show result box

let score_text =resultBox.querySelector('.score_text')

if(userScor >3){
	let scroTag ='<span>and congrats😍😍 you got <p>'+userScor+'</p>out of <p>' + questions.length +'</p> </span>';
	score_text.innerHTML=scroTag;

}else if(userScor >1){
	let scroTag ='<span>and nice😊😊 you got only <p>'+userScor+'</p>out of <p>' + questions.length +'</p> </span>';
	score_text.innerHTML=scroTag;

}else{
	let scroTag ='<span>and sorry😢😢 you got only <p>'+userScor+'</p>out of <p>' + questions.length +'</p> </span>';
	score_text.innerHTML=scroTag;

}





}



function showQuestion(index){
let queText =document.querySelector('.queText');
let queTag ='<span>'+questions[index].numb +'.' + questions[index].question +'</span>'
queText.innerHTML=queTag;


let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

opList.innerHTML=option_tag;


let op =opList.querySelectorAll('.option');

for(let i =0;i<op.length; i++){
	op[i].setAttribute('onclick','optionSelected(this)');
}

}




let thikIcon ='<div class="rightQue"><i class="fa fa-check"></i></div>';

let cross='<div class="wrongQue"><i class="fa fa-times"></i></div>';






function optionSelected(answer){
clearInterval(counter);
clearInterval(counterLine);

let ans =answer.textContent;
let correctAns =questions[queCount].answer;
let alloption =opList.children.length;


if(ans ==correctAns){
	userScor +=1;
	console.log(userScor);
	answer.classList.add('correct');
	answer.insertAdjacentHTML("beforeend", thikIcon);
	audioOne.play();

}else{

	answer.classList.add('incorrect');
	answer.insertAdjacentHTML("beforeend", cross);
	audioTwo.play();
	for (let i = 0; i < alloption; i++) {
	if(opList.children[i].textContent ==correctAns){
	opList.children[i].setAttribute('class','option correct');
	

	}
}


}

for (let i = 0; i < alloption; i++) {
	opList.children[i].classList.add('disabled');
}

nextBtn.style.display='block';



}


// timer function

function showTimer(time){

counter=setInterval(timer,1000);


function timer(){
timeInput.textContent=time;
time--;
	
	if(time <9){
		let addZero =timeInput.textContent;
		timeInput.textContent='0'+ addZero;
	}

	if(time <0){
	clearInterval(counter);	
	timeInput.textContent='00';
	timeLeft.textContent='Time Off';

	nextBtn.style.display='block';

	}

}


}


function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}



// total question show in footer


function showFooter(index){
let total_que =queBox.querySelector('.totalQue');
let totalTag ='<h4><span class="spanOne">'+index+'</span>of<span class="spanTwo">'+questions.length+'</span>questions</h4>';
total_que.innerHTML=totalTag;
}







