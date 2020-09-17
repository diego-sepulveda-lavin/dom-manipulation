const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.body.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';

    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl} alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 starts</p>
    </div>
    `
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement)

}

const toogleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toogleBackdrop()
};

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
    toogleMovieModal()
    clearMovieInputs()
};

const clearMovieInputs = () => {
    for (input of userInputs) {
        input.value = ''
    }
};

const backdropClickHandler = () => {
    toogleMovieModal()
    clearMovieInputs()
};
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const urlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || urlValue.trim() === '' || ratingValue.trim() === '' || parseInt(ratingValue) < 1 || parseInt(ratingValue) > 5) {
        alert('Please enter valid values (rating between 1 and 5)')
        return
    }
    const newMovie = {
        title: titleValue,
        url: urlValue,
        rating: ratingValue
    }
    movies.push(newMovie)
    toogleMovieModal()
    clearMovieInputs()
    renderNewMovieElement(newMovie.title, newMovie.url, newMovie.rating)
    updateUI()
};

startAddMovieButton.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);


