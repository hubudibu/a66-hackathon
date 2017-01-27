const __urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
const __imgRegex = /^http?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/ig;

function parseURL($string){

    var exp = __urlRegex;
    return $string.replace(exp,function(match){
            __imgRegex.lastIndex=0;
            if(__imgRegex.test(match)){
                return '<img src="'+match+'" class="thumb" />';
            }
            else{
                return '<a href="'+match+'" target="_blank">'+match+'</a>';
            }
        }
    );
}

const utils = {
  flattenArrays: (arrays) =>  [].concat.apply([], arrays),
  parseURLs: parseURL,
}
