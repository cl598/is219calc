const calculations = require('./calculations')
const addition = require('./calculations/addition')
const subtraction = require('./calculations/subtraction')
const multiplication = require('./calculations/multiplication')
const division = require('./calculations/division')
const square = require('./calculations/square')
const squareroot = require('./calculations/squareroot')

class calculator{

    static calculation = [];

    static addition(x,y){
        let calculations = new calculations(x,y,addition);
        calculator.calculation.push(calculations);
        return calculations.GetResults();
    }

    static subtraction(x,y){
        let calculations = new calculations(x,y,subtraction);
        calculator.calculations.push(calculations);
        return calculations.GetResults();
    }

    static multiplication(x,y){
        let calculations = new calculations(x,y,multiplication);
        calculator.calculations.push(calculations);
        return calculations.GetResults();
    }

    static division(x,y){
        let calculations = new calculations(x,y,division);
        calculator.calculations.push(calculations);
        return calculations.GetResults();
    }

    static square(x){
        let calculations = new calculations(x,null,square);
        calculator.calculations.push(calculations);
        return calculations.GetResults();
    }

    static squareroot(x){
        let calculations = new calculations(x,null,squareroot);
        calculator.calculations.push(calculations);
        return calculations.GetResults();
    }

}