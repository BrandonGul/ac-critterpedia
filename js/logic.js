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

  if (table.style.display == "block") {
    winX = window.scrollX,
    menu.style.display = "none",
    table.style.display = "none",
    info.style.display = "block";

    gen();
  }
  else {
    menu.style.display = "block",
    table.style.display = "block",
    info.style.display = "none",
    window.scrollTo(winX, 0);
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

function renderBugs() {
  document.getElementById("menuH1").innerHTML = 'Insects';
  document.getElementById("menuHead").style.float = null;
  document.getElementById("menuHead").style.marginRight = null;
  document.getElementById("menuHead").style.marginLeft = null;

  var formatStr = ``,
      table = document.getElementById("table"),
      i = 0,
      newDict = {'group0': {}, 'group1': {}, 'group2': {}, 'group3': {}, 'group4': {}};

  let mql = window.matchMedia('(max-width: 800px)');

  if (mql.matches) {
    formatStr += `
    <tr>
      <td colspan="18">
        <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: 50px; margin-bottom: 30px">

        </div>
      </td>
    </tr>

    <tr>
    <td><div id="tdSpace"></div></td>`;
  }
  else {
    formatStr += `
    <tr>
      <td colspan="18">
        <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: -40px; margin-bottom: 50px">

        </div>
      </td>
    </tr>

    <tr>
    <td><div id="tdSpace"></div></td>`;
  }

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
            <td onclick="show()" style="border: 1px solid; border-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3; border-bottom: 1px solid; border-bottom-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          break;
        default:
          if (i == 15) {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid; border-left-color: #bfbaa3; border-right: 1px solid; border-right-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></div></td>
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
  document.getElementById("menuH1").innerHTML = 'Fish';

  var formatStr = ``,
      table = document.getElementById("table"),
      i = 0,
      newDict = {'group0': {}, 'group1': {}, 'group2': {}, 'group3': {}, 'group4': {}};

  let mql = window.matchMedia('(max-width: 800px)');

  if (mql.matches) {
    document.getElementById("menuHead").style.float = 'right'
    document.getElementById("menuHead").style.marginRight = '-4px'
    formatStr += `
    <tr>
      <td colspan="18">
        <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: 50px; margin-bottom: 30px">

        </div>
      </td>
    </tr>

    <tr>
    <td><div id="tdSpace"></div></td>`;
  }
  else {
    document.getElementById("menuHead").style.marginLeft = '98px'
    formatStr += `
    <tr>
      <td colspan="18">
        <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: -40px; margin-bottom: 50px">

        </div>
      </td>
    </tr>

    <tr>
    <td><div id="tdSpace"></div></td>`;
  }

  for (var key in fish) {
    i++;
    switch (i) {
      case 1:
        newDict['group0'][key] = fish[key];
        break;
      case 2:
        newDict['group1'][key] = fish[key];
        break;
      case 3:
        newDict['group2'][key] = fish[key];
        break;
      case 4:
        newDict['group3'][key] = fish[key];
        break;
      default:
        newDict['group4'][key] = fish[key];
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
            <td onclick="show()" style="border: 1px solid; border-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3; border-bottom: 1px solid; border-bottom-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          break;
        default:
          if (i == 15) {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid; border-left-color: #bfbaa3; border-right: 1px solid; border-right-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            formatStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></div></td>
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

renderBugs()
