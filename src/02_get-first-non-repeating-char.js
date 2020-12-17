/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
    str = str.split(" ").join("");
    // console.log(a);
    var array = [];
    for(let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        if (str.indexOf(char) == str.lastIndexOf(char)) {
            array.push(char);
        }
    }
    return array[0];
}

module.exports = solution
