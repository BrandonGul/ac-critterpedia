var bugStr = "",
    fishStr = "";

function render(str) {

  window.scrollTo(0, 0);

  let table = document.getElementById("table"),
      menuHead = document.getElementById("menuHead"),
      m1 = document.getElementById("menuH1"),
      mql = window.matchMedia('(max-width: 800px)');

  switch (true) {
    case (str == 'bugs'):
        m1.innerHTML = 'Insects';
        menuHead.style.float = null;
        menuHead.style.marginRight = null;
        menuHead.style.marginLeft = null;
        break;
    case (str == 'fish'):
        m1.innerHTML = 'Fish';
        if (mql.matches) {
          menuHead.style.float = 'right';
          menuHead.style.marginRight = '-4px';
        }
        else {
          menuHead.style.marginLeft = '98px';
        }
        break;
  }

  switch (true) {

    case (str == 'bugs' && bugStr != ""):
        table.innerHTML = bugStr;
      break;

    case (str == 'fish' && fishStr != ""):
        table.innerHTML = fishStr;
      break;

    case (str == 'bugs' && bugStr == ""):
        bugStr = makeFormat(bugs);
        table.innerHTML = bugStr;
      break;

    case (str == 'fish' && fishStr == ""):
        fishStr = makeFormat(fish);
        table.innerHTML = fishStr;
      break;
  }
}

function makeFormat(rDict) {
  var i = 0,
      row = -1,
      newStr = "";
  let keys = Object.keys(rDict);

  newStr += `<tr><td colspan="18"><div id="spacer"></div></td></tr>`;

  while (i < 5) {
    switch (true) {
      case (row == -1):
        newStr += '<td><div id="tdSpace"></div></td>';
      break;
      case (i in [0,1,2,3] && row <= 14):
        newStr += `<td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3;"><div id="${keys[(row * 5) + i]}" class="all" style="table-layout: fixed"></div></td>`
        break;
      case (i == 4 && row <= 14):
        newStr += `<td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3; border-bottom: 1px solid; border-bottom-color: #bfbaa3"><div id="${keys[(row * 5) + i]}" class="all" style="table-layout: fixed"></td>`
        break;
      case (i == 4 && row == 15):
        newStr += `<td onclick="show()" style="border: 1px solid; border-color: #bfbaa3"><div id="${keys[(row * 5) + i]}" class="all" style="table-layout: fixed"></td>`
        break;
      case (row == 15):
        newStr += `<td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid; border-left-color: #bfbaa3; border-right: 1px solid; border-right-color: #bfbaa3;"><div id="${keys[(row * 5) + i]}" class="all" style="table-layout: fixed"></td>`
        break;
      case (row == 16):
        newStr += `<td><div id="tdSpace"></div></td></tr>`
        break;
      default:
        i++;
        row = -2;
    }
    row++;
  }

  newStr += `<tr><td colspan="18"><div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: 20px; margin-bottom: 40px"></div></td></tr>`

  return newStr
}
