const watchlistContainer = document.getElementById('watchlist-container');
const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
if (watchlist.length === 0) {
    watchlistContainer.innerHTML = "<p>No movies added yet.</p>";
} else {
    let listHTML = "<ul class='watchlist-list'>";
    watchlist.forEach((movie) => {
        listHTML += `<li> ${movie}</li>`;
    });
    listHTML += "</ul>";
    watchlistContainer.innerHTML = listHTML;
}