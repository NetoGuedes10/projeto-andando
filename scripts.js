
const result = document.querySelector(".result")

const humanscore = document.querySelector("#human-score")
const machinescore = document.querySelector("#machine-score")

let humanscoreNumber = 0
let machinescoreNumber = 0




const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissorss']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log('Humano:' + human + "Maquina:" + machine)


    if (human === machine) {
        result.innerHTML = "Deu empate"

    } else if ((human === 'paper' && machine === 'rock') ||
        (human === "rock" && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {

        humanscoreNumber++
        humanscore.innerHTML = humanscoreNumber

        result.innerHTML = "VocÊ ganhou"
    } else {

        machinescoreNumber++
        machinescore.innerHTML = machinescoreNumber


        result.innerHTML = "Você perdeu para a Alexa"
    }


}