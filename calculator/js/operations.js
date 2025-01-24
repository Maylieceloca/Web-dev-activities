function plus() {
    document.getElementById('operations').value = "+";
    const display = document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}

function minus() {
    document.getElementById('operations').value = "-";
    const display = document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}

function times() {
    document.getElementById('operations').value = "*";
    const display = document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}

function divide() {
    document.getElementById('operations').value = "/";
    const display = document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}

function dot() {
    document.getElementById('operations').value = "c";
}

function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operations').value;

    if(display2 !== "") {
        let answer;
        if(operator == "+") {
            answer = Number(display2) +Number(display);
        }

        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    }

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

    document.getElementById('operator').value = "+";

    if(operator == "+"){
        answer = Number(num) + Number(num2);
    }

    else if(operator == "-") {
        answer = Number(num) - Number(num2);
    }

    else if(operator == "*") {
        answer = Number(num) * Number(num2);
    }

    else if(operator == "/") {
        answer = Number(num) / Number(num2);
    }

    document.getElementById('display').value = answer;
    document.getElementById('display2').value = answer;
    document.getElementById('operations').value = "";
}