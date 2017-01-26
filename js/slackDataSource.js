const slackDataSource = (() => {
  const SHEETID = '1zyx2ey7RdcubMEhAUXJA_PrqED9TQlhlTlUy_MxUbvM'
  const APIKEY = 'AIzaSyA5BRzp7GK1DDXciqpRXuK0v8mJanTMM1w'
  const RANGE = 'A2:D'
  return {
    get: () => fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEETID}/values/${RANGE}?key=${APIKEY}`,
          { method: 'get' }
        )
        .then(response => response.json())
        .then(responseJSON => responseJSON.values.map((row) => ({
          date: parseInt(row[0]),
          text: row[3],
          author: row[2],
          type: 'slack',
          team: 'Lone Wolfs',
        })))
  }
})()
