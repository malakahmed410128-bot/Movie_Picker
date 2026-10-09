var box = document.getElementById('list');
var data = localStorage.getItem('watchlist');

if (data == null || data == "[]") {
  box.innerHTML = "no movies saved";
} else {
  var arr = JSON.parse(data);
  var html = "";

  for (var i = 0; i < arr.length; i++) {
    html = html + "<p style='padding:8px; background:#f0f0f0; margin:5px; border-radius:4px;'>" + arr[i] + "</p>";
  }

  box.innerHTML = html;
}