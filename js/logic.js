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
    let id = event.target.id,
        mql = window.matchMedia('(max-width: 800px)');

    switch (true) {
      case (id in bugs && mql.matches):
        leftTable.innerHTML = bugMobile(bugs[id]);
        break;
      case (id in bugs):
        leftTable.innerHTML = bugWeb(bugs[id]);
        break;
      case (id in fish && mql.matches):
        leftTable.innerHTML = fishMobile(fish[id]);
        break;
      default:
        leftTable.innerHTML = fishWeb(fish[id]);
    }

  }
}

render('bugs');
