const instaDataSource = (() => {
  const SHEETID = '1zyx2ey7RdcubMEhAUXJA_PrqED9TQlhlTlUy_MxUbvM'
  const APIKEY = 'AIzaSyA5BRzp7GK1DDXciqpRXuK0v8mJanTMM1w'
  const RANGE = 'Sheet2!A2:G'
  return {
    get: () => fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEETID}/values/${RANGE}?key=${APIKEY}`,
          { method: 'get' }
        )
        .then(response => response.json())
        .then(responseJSON => responseJSON.values.map((row) => ({
          date: parseInt(row[0]),
          text: (row[6] === 'video' ? `<video src="${row[0]}" autoplay loop>` : `<img src="${row[2]}"><p>${row[3]}</p>`),//s + `<p>${row[3]}</p>`,
          author: row[4],
          type: 'insta',
          team: null,
        })))
  }
})()
