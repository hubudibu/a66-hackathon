const utils = {
  flattenArrays: (arrays) =>  [].concat.apply([], arrays),
  parseURLs: (url) => url.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>'),
}
