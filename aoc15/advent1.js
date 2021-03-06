function init1() {
    var ac = document.getElementById("adventContent");
    var content = '<h2>--- Day 1: Not Quite Lisp ---</h2>';
    content += '<input type="text" id="input1"></input><br>';
    content += '<button type="button" onclick="day1part1()">Part 1</button>';
    content += '<button type="button" onclick="day1part2()">Part 2</button>';
    content += '<div id="output1"></div>';
    ac.innerHTML = content;
}

function day1part1() {
    var input = document.getElementById("input1").value;
    var floor = 0;

    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == '(') floor++;
        else if (input.charAt(i) == ')') floor--;
    }

    document.getElementById("output1").innerHTML = floor;
}

function day1part2() {
    var input = document.getElementById("input1").value;
    var floor = 0;
    var pos = 0;

    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == '(') floor++;
        else if (input.charAt(i) == ')') floor--;

        if (floor == -1) {
            pos = i + 1;
            break;
        }
    }

    document.getElementById("output1").innerHTML = pos;
}