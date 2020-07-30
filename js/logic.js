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
  var x = document.getElementById("table");
  var y = document.getElementById("info");

  if (y.style.display == "block") {
    y.style.display = "none";
    x.style.display = "block";
    window.scrollTo(winX, 0);
  }
  else {
    winX = window.scrollX;
    y.style.display = "block";
    x.style.display = "none";

    gen();
  }

  function gen () {
    var leftTable = document.getElementById("left");
    let id = event.target.id;

    if (id in bugs) {
      leftTable.innerHTML = format(bugs[id]);
    } else {

    }
  }

  function format (data) {

    return web(data);

  }
}

function renderBugs() {
  var formatStr = ``,
      table = document.getElementById("table"),
      i = 0,
      newDict = {'group0': {}, 'group1': {}, 'group2': {}, 'group3': {}, 'group4': {}};

  formatStr += `
  <tr>
    <td colspan="18">
      <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: -40px; margin-bottom: 50px">

      </div>
    </td>
  </tr>

  <tr>
  <td><div id="tdSpace"></div></td>
  `;

  for (var key in bugs) {
    i++;
    switch (i) {
      case 1:
        newDict['group0'][key] = bugs[key];
        break;
      case 2:
        newDict['group1'][key] = bugs[key];
        break;
      case 3:
        newDict['group2'][key] = bugs[key];
        break;
      case 4:
        newDict['group3'][key] = bugs[key];
        break;
      default:
        newDict['group4'][key] = bugs[key];
        i = 0;
    }
  }

  for (var key in newDict) {
    for (var inner in newDict[key]) {
      if (i == 16) {
        i = 0;
        formatStr += `
        <td><div id="tdSpace"></div></td>
        </tr>
        <tr>
        <td><div id="tdSpace"></div></td>
        `
      }

      switch (key) {
        case 'group4':
          if (i == 15) {
            formatStr += `
            <td onclick="show()" style="border: 1px solid; border-color: #bfbaa3"><div  img id="${inner}" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3; border-bottom: 1px solid; border-bottom-color: #bfbaa3"><div  img id="${inner}" style="table-layout: fixed"></td>
            `
          }
          break;
        default:
          if (i == 15) {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid; border-left-color: #bfbaa3; border-right: 1px solid; border-right-color: #bfbaa3;"><div  img id="${inner}" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3;"><div  img id="${inner}" style="table-layout: fixed"></div></td>
            `
          }
      }
      i++;
    }
  }

  formatStr += `
  <tr>
    <td colspan="18">
      <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: 20px; margin-bottom: 40px">

      </div>
    </td>
  </tr>
  `

  table.innerHTML = formatStr;
}

function renderFish() {
  var table = document.getElementById("table");
  table.innerHTML = 'Work in progress';
}

renderBugs()
