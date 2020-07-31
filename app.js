const img = document.getElementById('image');
const  counter= document.getElementById('count');

const infoDb = document.querySelector('.info-dash-board');
const indfoDbText = document.querySelector('.info-dash-board h2');
const gameOnBtn = document.getElementById('game-on');

const gameDesitionCntrl = document.querySelector('.controlar-buttons');
const gameDesitionCntrlBtns = document.querySelectorAll('.controlar-buttons button')

 const yesChoise = document.querySelector('.choise-yes');
 const noChoise = document.querySelector('.choise-no');

 const noChoiseBtns = document.querySelectorAll('.choise-no button');

const successMsg = document.querySelector(".success");
const playAgainBtn = successMsg.firstElementChild;

// ALGORITHGHEM start & intitial the data struct value
let left, right,mid,count;

const setMid = (l,r)=>{
    mid= Math.floor((left+right)/2);
    return mid;
}

// play again
function reset(){
    left=1;
    right=2000;
    count=0;
    mid = setMid(left,right);
}
function playAgain(){
    reset();
    updateInfoDb('Please think a number in between 1 to 2000');
    gameOnBtn.style.display = "block";
    gameDesitionCntrl.style.display = 'none';
    img.setAttribute("src","img/1.gif");
}

function updateInfoDb(text){
    indfoDbText.textContent = text;
    gameOnBtn.style.display = "none";
}

function updateCount(){
    counter.innerHTML = ` Step: <span>${count}</span>`;
    counter.style.visibility='visible';
}

function gameIsStart(){
    reset();
    desitionChoise();
    updateCount()
}

function gameSuccess(){
    img.setAttribute("src","img/3.gif");
    updateInfoDb(`See I can read your mind only ${count} step😂😂😂`);
    gameDesitionCntrl.style.display= "none";
    successMsg.style.display = 'block';
}
// take Yes or No desition
function desitionChoise(){
    img.setAttribute("src","img/2.gif");
    updateInfoDb(`Is it ${mid}?`);
    gameDesitionCntrl.style.display = 'block';
}
// if yes
function desitionIsYes(){
    count++;
    gameSuccess();
    updateCount();
}
// if no
function desitionIsNo(){

    noChoise.style.display = 'block';
    noChoiseBtns[0].textContent = `It is gretter then ${mid}`;
    noChoiseBtns[1].textContent = `It is less then ${mid}`;
    gameDesitionCntrl.style.display= "none";
    
}

function midIsGetter(){
    count++;
    noChoise.style.display = 'block';
    left=mid+1;     /** algo process*/
    mid = setMid(left,right);
    desitionChoise();
    noChoise.style.display = 'none';
    updateCount();
}
function midIsLess(){
    count++;
    noChoise.style.display = 'block';
    right=mid-1;    /** algo process*/
    mid = setMid(left,right);
    desitionChoise();
    noChoise.style.display = 'none';
    updateCount();
}




// event handeler
gameOnBtn.addEventListener('click',gameIsStart);

gameDesitionCntrlBtns[0].addEventListener('click',desitionIsYes);
gameDesitionCntrlBtns[1].addEventListener('click',desitionIsNo);

noChoiseBtns[0].addEventListener('click',midIsGetter);
noChoiseBtns[1].addEventListener('click',midIsLess);

playAgainBtn.addEventListener('click', ()=>{
    playAgain();
    successMsg.style.display = 'none';
    counter.style.visibility='hidden';
})









