const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 75;
const width = 9;

//MOVE FROG
function moveFrog(e) { 
    console.log(squares)

    switch (e.key) {
        case 'ArrowLeft':
            currentIndex -= 1 
            break
        case 'ArrowRight':
            currentIndex += 1
            break
        case 'ArrowUp':
            currentIndex -= width
            break
        case 'ArrowDown':
            currentIndex += width
            break
    }

    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)









































































//     switch (e.key) {
//         case 'ArrowLeft':
//                 console.log('move left')
//             break
//         case 'ArrowRight':

//             break
//         case 'ArrowUp':

//             break
//         case 'ArrowDown':

//             break
//     }
//     squares[currentIndex].classList.add('frog')

// }
// document.addEventListener('keyup', moveFrog)