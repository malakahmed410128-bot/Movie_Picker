var arr = [
  { title: "Inception", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
  { title: "Interstellar", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300" },
  { title: "Spirited Away", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300" },
  { title: "The Dark Knight", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300" },
  { title: "Spider-Man", img: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=300" }
];

var b1 = document.getElementById('btn1');
var res = document.getElementById('res');
var b2 = document.getElementById('btn2');

var m = "";

b1.onclick = function() {
  res.innerHTML = "Loading...";

  setTimeout(function() {
    var r = Math.floor(Math.random() * arr.length);
    m = arr[r].title;
    var imgUrl = arr[r].img;

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