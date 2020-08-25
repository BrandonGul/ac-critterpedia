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
      newDict = {'group0': {}, 'group1': {}, 'group2': {}, 'group3': {}, 'group4': {}}
      newStr = "";

  newStr += `
      <tr>
        <td colspan="18">
          <div id="spacer"">

          </div>
        </td>
      </tr>

      <tr>
      <td><div id="tdSpace"></div></td>`;

  for (var key in rDict) {
    i++;
    switch (i) {
      case 1:
        newDict['group0'][key] = rDict[key];
        break;
      case 2:
        newDict['group1'][key] = rDict[key];
        break;
      case 3:
        newDict['group2'][key] = rDict[key];
        break;
      case 4:
        newDict['group3'][key] = rDict[key];
        break;
      default:
        newDict['group4'][key] = rDict[key];
        i = 0;
    }
  }

  for (var key in newDict) {
    for (var inner in newDict[key]) {
      if (i == 16) {
        i = 0;
        newStr += `
        <td><div id="tdSpace"></div></td>
        </tr>
        <tr>
        <td><div id="tdSpace"></div></td>
        `
      }

      switch (key) {
        case 'group4':
          if (i == 15) {
            newStr += `
            <td onclick="show()" style="border: 1px solid; border-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            newStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3; border-bottom: 1px solid; border-bottom-color: #bfbaa3"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          break;
        default:
          if (i == 15) {
            newStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid; border-left-color: #bfbaa3; border-right: 1px solid; border-right-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></td>
            `
          }
          else {
            newStr += `
            <td onclick="show()" style="border-top: 1px solid; border-top-color: #bfbaa3; border-left: 1px solid;border-left-color: #bfbaa3;"><div id="${inner}" class="all" style="table-layout: fixed"></div></td>
            `
          }
      }
      i++;
    }
  }

  newStr += `
  <tr>
    <td colspan="18">
      <div style="width: 100%; height: 2px; background-color: #bfbaa3; margin-top: 20px; margin-bottom: 40px">

      </div>
    </td>
  </tr>
  `

  return newStr
}
