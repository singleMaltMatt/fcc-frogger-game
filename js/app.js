const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
console.log(squares)

let currentIndex = 76

//MOVE FROG
function moveFrog(e) {

    switch (e.key) {
        case 'ArrowLeft':

            break
        case 'ArrowRight':

            break
        case 'ArrowUp':

            break
        case 'ArrowDown':

            break
    }

    squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)