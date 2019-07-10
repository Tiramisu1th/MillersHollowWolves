function shuffleArray(array) {
    var temp = array[0]
    array.splice(0, 1)
    var i; var j; var x;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    array.unshift(temp)
    var temp = []
    return array;
}

module.exports = shuffleArray