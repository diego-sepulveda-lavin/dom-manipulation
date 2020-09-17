const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.body.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toogleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toogleBackdrop()
}

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

startAddMovieButton.addEventListener('click', toogleMovieModal)

