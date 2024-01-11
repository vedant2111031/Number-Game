let Random =parseInt(Math.random()*100+1)
const submit =document.querySelector('#subt')
const guesses =document.querySelector('#guessfield')
const previous =document.querySelector('.prevg')
const chances =document.querySelector('.rem')
const comment =document.querySelector('.comment')
const startOver=document.querySelector('.result')

const p=document.createElement('p')

let previousGuess=[];
let numGuess=1;

let startGame=true

if(startGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const value=parseInt(guesses.value);
        console.log(value);
        validate(value);
    })
}
function validate(value){
    if(isNaN(value)){
        alert("Give proper number")
    }
    else if(value>100){
        alert("Give proper number")
    }
    else if(value<1){
        alert("Give proper number")
    }
    else{
        previousGuess.push(value)
        if(numGuess==11){
            displayGuess(value);
            displayMessage(`The actual number was ${Random}`)
            endGame()
        }
        else{
            displayGuess(value)
            checkGuess(value)
        }
    }
}


function checkGuess(value){
if(value===Random){
    displayMessage(`Yey You guessed it right`);
    endGame()
}
else if(value<Random){
    displayMessage(`Your number is small`);
}
else{
    displayMessage(`Your number is large`);
}

}



function displayGuess(value){
previous.innerHTML += `${value} `
numGuess++;
chances.innerHTML=`${11-numGuess}`
}


function displayMessage(message){
comment.innerHTML=`<h2>${message}</h2>`

}


function endGame(){
 guesses.value=''
 guesses.setAttribute('disabled','')
 p.classList.add('button');
 p.innerHTML=`<h2 id="newGame">Wanna play again</h2>`
 startOver.appendChild(p);
 startGame=false;
 newGame();
}
function newGame(){
 const newGamebutton= document.querySelector('#newGame')
 newGamebutton.addEventListener('click',function(e){
    Random =parseInt(Math.random()*100+1);
    previous.innerHTML = ` `
    previousGuess=[]
    numGuess = 1
    chances.innerHTML=`${11-numGuess}`
    guesses.removeAttribute('disabled')
    startOver.removeChild(p);
    displayMessage(``)
    startGame=true
})
}