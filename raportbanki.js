var scores = [60, 50, 60, 58, 54, 54,
     58, 50, 52, 54, 48, 69,
     34, 55, 51, 52, 44, 51,
     69, 64, 66, 55, 52, 61,
     46, 31, 57, 52, 44, 18,
     41, 53, 61, 51, 44
 ];

function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Płyn do baniek nr " + i + " wynik: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestSolution(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
var highScore = printAndGetHighScore(scores);
console.log("Liczba testów: " + scores.length);
console.log("Największa liczba wytworzonych baniek: " + highScore);

var bestSolutions = getBestSolution(scores, highScore);
console.log("Płyny z najlepszym wynikiem " + bestSolutions);

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

function getMostCostEffectiveSolution(score, costs, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                costs = costs[i];
            }
        }
    } return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Płyn numer " + mostCostEffective + " jest najbardziej opłacalny");
