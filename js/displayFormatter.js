function web(data) {

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
    <td style="width: 40%; height: 100%; border: 2px solid; border-color: #bfbaa3; min-width: 400px">
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

function mobile (data) {

  var str = `
    <td style="border: 2px solid; border-color: #bfbaa3;">
      <div img id="${data['id']}" style="margin: 0 auto;table-layout: fixed; height: 300px; width: 300px"></div>
      <div style="background-color: clear; margin: 0 auto; display: table">
        <div style="background-color: white; display: inline-block; transform: rotate(-2deg); padding-left: 30px; padding-right: 30px; margin-top: -6px; margin-left: -3px;">
          <h3 style="background-color: white; margin-block-end: 10px; margin-block-start: 10px; color: #584f4f; margin-bottom: 10px">${data['name']}</h3>
        </div>
        <div style="background-color: #00000030; width: 100%; height: 3px; transform: rotate(-2deg); margin-left: -2px; margin-bottom: 10px"></div>
      </div>
      </td>
      </tr>
      <tr>
    <td style="width: 40%; height: 100%; border: 2px solid; border-color: #bfbaa3; min-width: 250">
    <div style="background-color: #56902b61; display: inline-block; border-radius: 4px; margin-left: 30px; margin-bottom: 10px; margin-top: 10px">
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
  <div style="background-color: #56902b61; display: inline-block; border-radius: 4px; margin-left: 30px; margin-top: 30px;">
    <h1 style="padding-right: 10px; margin: 0; color: #2f422d">Current Active Hours</h1>
  </div>
  <table style="width: 100%; table-layout: fixed; margin: auto; position: relative; z-index: 1">
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
  <table style="width: calc(100% - 4.3%);; table-layout: fixed; border-spacing: 0; top: -16px; position: relative; z-index: 0; left: -.8%; margin: auto; margin-top: -4px;">
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
