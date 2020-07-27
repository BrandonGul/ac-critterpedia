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

    var str = `
      <td style="border: 2px solid; border-color: #bfbaa3;">
        <div img id="${data['id']}" style="margin: 0 auto; width: 450px; height: 450px; table-layout: fixed;"></div>
        <div style="background-color: clear; margin: 0 auto; display: table">
          <div style="background-color: white; display: inline-block; transform: rotate(-2deg); padding-left: 30px; padding-right: 30px; margin-top: -6px; margin-left: -3px;">
            <h3 style="background-color: white; margin-block-end: 10px; margin-block-start: 10px; font-size: 2em; color: #584f4f">${data['name']}</h3>
          </div>
          <div style="background-color: #00000030; width: 100%; height: 3px; transform: rotate(-2deg); margin-left: -2px"></div>
        </div>
        </td>
      <td style="width: 40%; height: 100%; border: 2px solid; border-color: #bfbaa3;">
      <div style="background-color: #56902b61; display: inline-block; border-radius: 4px; margin-left: 30px; margin-bottom: 10px">
        <h1 style="padding-right: 10px; margin: 0; color: #2f422d">Seasonality</h1>
      </div>
      <table style="width: 98%; border-spacing: 0px; table-layout: fixed; background: #bfbaa3; border: 1px solid; border-color: #bfbaa3; margin: auto;">
        <tr>
    `

    let safe = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

    for (var i = 0; i < safe.length; i++) {
      if (i == 4 || i == 8) {
        str += '</tr><tr>'
      }

      if (data['calOn'].includes(i)) {
        str += `
        <td><div style="background-color: #eee5be; padding-top: 3px; padding-left: 2px; padding-right: 3px; padding-bottom: 4px;">
          <h2 style="margin: 0; border-radius: 10px; background: #eee5be; color: #bfbaa3; text-align: center; padding: 5px">${safe[i]}</h2>
        </div></td>`
      }
      else {
        str += `
        <td><div style="background-color: #eee5be; padding-top: 3px; padding-left: 2px; padding-right: 3px; padding-bottom: 4px;">
          <h2 style="margin: 0; border-radius: 10px; background: #c0ce0fd6; color: #2d2f09; text-align: center; padding: 5px">${safe[i]}</h2>
        </div></td>`
      }
    }

    str += `
    </tr></table>
    <br>
    <br>
    <div style="background-color: #56902b61; display: inline-block; border-radius: 4px; margin-left: 30px; margin-top: 30px;">
      <h1 style="padding-right: 10px; margin: 0; color: #2f422d">Current Active Hours</h1>
    </div>
    <table style="width: 350px; table-layout: fixed; margin: auto; position: relative; z-index: 1">
      <tbody>
      <tr>
        <td style="color: #2d2f09">AM</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="color: #2d2f09">PM</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td style="color: #2d2f09">12</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="color: #2d2f09">6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="color: #2d2f09">12</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="color: #2d2f09">6</td>
      </tr>
      <tr>
        <td><div style="height: 25px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 15px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 20px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 15px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 25px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 15px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 20px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 15px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 7px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
        <td><div style="height: 25px; width: 1px; background-color: #2d2f09; margin: 0 calc(100% / 5);"></div></td>
      </tr>
    </tbody>
    </table>
    <table style="width: 334px; table-layout: fixed; border-spacing: 0; top: -16px; position: relative; z-index: 0; left: -3px; margin: auto; margin-top: -4px;">
      <tbody>
        <tr>
    `
    for (var i = 0; i < 24; i++) {
      if (data['times'].includes(i)) {
        str += `<td style="padding: 0px"><div style="width: 100%; height: 10px; background-color: #c0ce0fd6"></div></td>`
      } else {
        str+=  '<td></td>'

      }
    }

    str += `
      </tr>
      <tr>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      <td style="padding: 0px; padding-top: 2px"><div style="width: 100%; height: 3px; background-color: #bfbaa3"></div></td>
      </tr>
      <tr>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      <td style="padding: 0px"><div style="width: 100%; height: 2px; background-color: #2d2f09"></div></td>
      </tr>
      </tbody>
      </table>
      </td>
      `

    return str;

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
