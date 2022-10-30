/* Enjoy the game
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {computerScore:0, playerScore: 0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ['rock','paper','scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
 console.log('bot getResult: ',computerChoice)
// let playerChoice = 'rock'
console.log('Man getResult: ', playerChoice)
  let score = 1

  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice){
    score = 0
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if(playerChoice == 'rock'  && computerChoice == 'scissors'){
    score = 1
  }
   else if(playerChoice == 'scissors' && computerChoice == 'paper'){
    score = 1
  }
   else if(playerChoice == 'paper' && computerChoice == 'rock'){
    score = 1
  }

  // Otherwise human loses (aka set score to -1)
  //  else if(playerChoice == 'scissors' && computerChoice == 'rock'){
  //   score = -1
  // }
  //  else if(playerChoice == 'paper' && computerChoice == 'scissors'){
  //   score = -1
  // }
  //  else if(playerChoice == 'rock' && computerChoice == 'paper'){
  //   score = -1
  // }
  else{
    score = -1
  }
console.log('score in get result: ', score)
  return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  // let finalResult
  const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('playerScore')
  
  if(score==1){
    // finalResult =  `You Win!` 
    resultDiv.innerText = `You Win!` 
  }
  else if(score == -1){
    // finalResult =  `You Lose!`
    resultDiv.innerText = `You Lose!`
  }
  else if(score == 0){
    // finalResult =  `It's a Draw!`
    resultDiv.innerText =`It's a Draw!`
  }
  // playerScore.innerText = `${score}` 
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']} 
  👑 
  Computer Score: ${totalScore['computerScore']}` 
  handsDiv.innerText = `👱‍♂️  ${playerChoice} vs 🤖  ${computerChoice}` 
  // result.innerText = `${finalresult}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
console.log('bot: ',computerChoice)
// let playerChoice = 'rock'
console.log('Man: ', playerChoice)
const score = getResult(playerChoice, computerChoice)
console.log('score: ', score)
  totalScore['playerScore'] += score 
  totalScore['computerScore'] += -score 
  console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsBtns= document.querySelectorAll('.rpsButton')
console.log(rpsBtns)
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 
  
 rpsBtns.forEach(rpsBtn => {
   // const playerChoice = rpsBtn.value
   rpsBtn.onclick =()=>{ 
     // onClickRPS(playerChoice)
     onClickRPS(rpsBtn.value)}
 }) 
  // Add a click listener to the end game button that runs the endGame() function on click
  const endGamebtn = document.getElementById('endGameButton')
  
  endGamebtn.onclick = () => {
    console.log('endGame')
    endGame(totalScore)
  }
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
   totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0 

   const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('playerScore')
  
  // const score= ''
  playerScoreDiv.innerText = ``
  handsDiv.innerText = ``
  resultDiv.innerText = ``
  // console.log("end Game")
}

playGame()