function voting(votes, players) {
    Object.keys(votes).reduce(function(a, b) 
        { return obj[a] > obj[b] ? a : b }
    );
}

module.exports = voting