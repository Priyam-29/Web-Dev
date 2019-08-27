function average(scores){
    var total = 0
    scores.forEach(function(score){
        total += score;
    });
    var avg = total/scores.length
    return Math.round(avg);
}

var scores = [90, 46, 78, 69, 46, 99, 86];
console.log(average(scores));