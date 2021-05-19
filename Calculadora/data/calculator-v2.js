class Calculator {
    constructor(_operand1, _operation, _operand2) {
        this.operand1;
        this.operand2;
        this.operation;
        console.log("ClassInitial: " + _operand1 + " - " + _operation + " - " + _operand2)
    }

    setOperand1(_operand1) {
        if (_operand1 != Number) {
            this.operand1 = _operand1;
            console.log("Class - SetOperand1:" + _operand1);

        } else {
            return false;
        }
    }

    setOperand2(_operand2) {
        if (_operand2 != Number) {
            this.operand2 = _operand2;
            console.log("Class - SetOperand2:" + _operand2);
        } else {
            return false;
        }

    }

    setOperation(_operation) {
        console.log("Class - Operation:" + _operation)
        if (_operation == "+" || _operation == "-" || _operation == "/" || _operation == "*") {
            this.operation = _operation;

        } else {
            return "ERROR";
        }
    }

    getResult() {
        let result = 0;
        switch (this.operation) {
            case "+":
                result = (this.operand1 + this.operand2);
                break;

            case "-":
                result = this.operand1 - this.operand2;
                break;

            case "*":
                result = this.operand1 * this.operand2;
                break;

            case "/":
                result = this.operand1 / this.operand2;
                break;

            default:
                return "ERROR2";
                break;
        }
        return result;
    }
    clearCalculator() {
        this.operand1 = 0;
        this.operand2 = 0;
        //        this.setOperation = "";
        this.operation = "";
        return "CLEAR";
    }

}

//-----------------------------------------------------------------------------------------------------//
let expression = ["", "", ""]
//let select = 0;
let myCalculator = new Calculator;

//sinal de menos

function mathNumber(_number) {
    if (expression[1] == "") {
        expression[0] += _number;
    } else if (expression[1] != "") {
        expression[2] += _number;
    }
    document.getElementById("column-display-lcd").innerText = expression[0] + " " + expression[1] + " " + expression[2];
}

function mathOperatorMinus(_operationMinus) {
    if (_operationMinus == "-" && expression[0] == "") {
        expression[0] += _operationMinus;
        console.log(expression)
    } else if (_operationMinus == "-" && expression[0] != "-" && expression[0] != ".") {
        expression[1] = _operationMinus;
        myCalculator.setOperand1(parseFloat(expression[0]));
        myCalculator.setOperation(_operationMinus);
    }
    document.getElementById("column-display-lcd").innerText = expression[0] + " " + expression[1] + " " + expression[2];
}

function mathOperatorOther(_operationOther) {
    if (expression[0] != "" && expression[0] != "." && expression[0] != "-") {
        expression[1] = _operationOther;
        myCalculator.setOperation(_operationOther);
    }
    document.getElementById("column-display-lcd").innerText = expression[0] + " " + expression[1] + " " + expression[2];
}

function remove() {
    if (expression[2] != "") {
        expression[2] = expression[2].slice(0, expression[2].length - 1);
        console.log("1");
    } else if (expression[1] != "") {
        expression[1] = "";
        console.log("2");
    } else if (expression[0] != "") {
        expression[0] = expression[0].slice(0, expression[0].length - 1);
        console.log("3");
    }
    document.getElementById("column-display-lcd").innerText = expression[0] + " " + expression[1] + " " + expression[2];
}

function point() {
    if (expression[0] != "" && expression[2] == "" && expression[0].indexOf(".") == -1) {
        expression[0] += ".";
    } else if (expression[2] != "" && expression[2].indexOf(".") == -1) {
        expression[2] += "."
    }
    document.getElementById("column-display-lcd").innerText = expression[0] + " " + expression[1] + " " + expression[2];
}

function clear2() {
    expression = ["", "", ""];
    document.getElementById("column-display-lcd").innerText = "";
}

function calculate() {
    console.log(expression);

    if (expression[2] != "" && parseFloat(expression[2]) != 0) {
        myCalculator.setOperand1(parseFloat(expression[0]));
        myCalculator.setOperation(expression[1]);
        myCalculator.setOperand2(parseFloat(expression[2]));

        console.log("Result: " + myCalculator.getResult());
        expression = [`${myCalculator.getResult()}`, "", ""];
        console.log(expression);

        document.getElementById("column-display-lcd").innerText = myCalculator.getResult();
        
    } else {
        expression = ["0", "", ""];
        document.getElementById("column-display-lcd").innerText = "0";
    }
}
