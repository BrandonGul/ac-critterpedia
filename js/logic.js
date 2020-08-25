function bob() {
  var x = window.scrollX;
  if (x > 200) {
    document.getElementById("h1Bla").innerHTML = ">";
    window.scrollTo(0, 0);
  }
  else {
    document.getElementById("h1Bla").innerHTML = "<";
    window.scrollTo(1000, 0);
  }
}

var winX = 0;

function show () {
  var table = document.getElementById("table"),
      info = document.getElementById("info"),
      menu = document.getElementById("menu");

  if (info.style.display == "block") {
    menu.style.display = "block",
    table.style.display = "block",
    info.style.display = "none",
    window.scrollTo(winX, 0);
  }
  else {
    winX = window.scrollX,
    menu.style.display = "none",
    table.style.display = "none",
    info.style.display = "block";

    gen();
  }

  function gen () {
    var leftTable = document.getElementById("left");
    let id = event.target.id;

    if (id in bugs) {
      leftTable.innerHTML = bugFormat(bugs[id]);
    }
    else {
      leftTable.innerHTML = fishFormat(fish[id]);
    }
  }

  function bugFormat (data) {

    let mql = window.matchMedia('(max-width: 800px)');

    if (mql.matches) {
      return bugMobile(data);
    }
    else {
      return bugWeb(data);
    }

  }

  function fishFormat (data) {

    let mql = window.matchMedia('(max-width: 800px)');

    if (mql.matches) {
      return fishMobile(data);
    }
    else {
      return fishWeb(data);
    }

  }
}

render('bugs');
