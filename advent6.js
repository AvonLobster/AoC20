function init6() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(6, "Custom Customs");
}

function day6part1() {
    let input = document.getElementById("input6").value;
    let lines = input.split("\n");
    let questions = new Array(26).fill(0);
    let totalCount = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\s*$/)) {
            totalCount += questions.reduce(function(a, b) {
                return a + b;
            }, 0);
            questions = new Array(26).fill(0);
        } else {
            for (let j = 0; j < lines[i].length; j++) {
                let qIndex = lines[i].charCodeAt(j) - 97;
                
                if (questions[qIndex] == 0) questions[qIndex] = 1;
            }
        }
    }

    document.getElementById("output6").innerHTML = totalCount;
}

function day6part2() {
    let input = document.getElementById("input6").value;
    let lines = input.split("\n");
    let questions = new Array(26).fill(0);
    let groupCount = 0;
    let totalCount = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\s*$/)) {
            questions.forEach(element => {
                if (element == groupCount) totalCount++;    
            });
            questions = new Array(26).fill(0);
            groupCount = 0;
        } else {
            groupCount++;

            for (let j = 0; j < lines[i].length; j++) {
                let qIndex = lines[i].charCodeAt(j) - 97;
                questions[qIndex]++;
            }
        }
    }

    document.getElementById("output6").innerHTML = totalCount;
}
