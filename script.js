var movies= [
  { title: "Inception", img: "INCEPTION.PNG" },
  { title: "Interstellar", img: "Interstellar.PNG" },
  { title: "La_La_Land", img: "La_la_land.PNG" },
  { title: "Spirited Away", img: "Spirited_Away.PNG" },
  { title: "The Dark Knight", img: "THE DARK KNIGHT.PNG" },
  { title: "Spider-Man: Into the Spider-Verse", img: "Spider-Man_Into_the_Spider-Verse.PNG" },
];

var b1 = document.getElementById('btn1');
var res = document.getElementById('res');
var b2 = document.getElementById('btn2');

var m = "";

b1.onclick = function() {
  res.innerHTML = "Loading...";

  setTimeout(function() {
    var r = Math.floor(Math.random() * movies.length);
    m = movies[r].title;
    var imgUrl = movies[r].img;

    res.innerHTML = "<h3>" + m + "</h3><img src='" + imgUrl + "' class='img'>";
    b2.style.display = "inline-block";
  }, 500);
}

b2.onclick = function() {
  var get = localStorage.getItem('watchlist');
  var list = [];

  if (get != null) {
    list = JSON.parse(get);
  }

  if (list.indexOf(m) == -1) {
    list.push(m);
    localStorage.setItem('watchlist', JSON.stringify(list));
    alert("added");
  } else {
    alert("already in list");
  }
}