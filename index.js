var crypto = require('crypto');

// returns a random string
/**
 * 
 * @param {number} length of the string you need.
 * @returns random string of the specified length
 */
function getRandomString(length=0){
    return crypto.randomBytes(length).toString('hex');
}


//returns jambled string of the text passed.
/**
 * 
 * @param {string} text the string which has to be shuffled
 * @returns shuffled string
 */
function shuffleString(text=''){
    text = text.toString();
    var textArr = text.split('');
   for(var char=0 ; char< textArr.length; char++){
       let randomNo =  Math.floor(Math.random() * textArr.length);
       var temp = textArr[char];
       textArr[char] = textArr[randomNo];
       randomNo = temp;
   }

   text = textArr.join('');
   return text;

}

exports.getRandomString = getRandomString;
exports.shuffleString = shuffleString;
