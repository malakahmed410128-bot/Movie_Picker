const movies = [
    "Inception",
    "Interstellar",
    "Spirited Away",
    "the Dark Knight",
    "Spider-Man: Into the Spider-Verse",
    "Paddington",
    "La La Land"
];

const recommendBtn = document.getElementById('recommend-btn');
const movieResult = document.getElementById('movie-result');

recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    movieResult.innerHTML = `<h3>suggested Movie:</h3><p>${selectedMovie}</p>`;
});