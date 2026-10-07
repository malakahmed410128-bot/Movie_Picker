const movies = [
    "Inception",
    "Interstellar",
    "Spirited Away",
    "The Dark Knight",
    "Spider-Man: Into the Spider-Verse",
    "Paddington",
    "La La Land"
];

const recommendBtn = document.getElementById('recommend-btn');
const movieResult = document.getElementById('movie-result');
const addWatchlistBtn = document.getElementById('add-watchlist-btn');

let currentMovie = "";
recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    currentMovie = movies[randomIndex];
    
    movieResult.innerHTML = `<h3>Suggested Movie:</h3><p>${currentMovie}</p>`;
    addWatchlistBtn.style.display = "inline-block"; 
});
addWatchlistBtn.addEventListener('click', () => {
    if (!currentMovie) return;

    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    if (!watchlist.includes(currentMovie)) {
        watchlist.push(currentMovie);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        alert(`${currentMovie} added to your Watchlist! 🎬`);
    } else {
        alert(`${currentMovie} is already in your Watchlist!`);
    }
});