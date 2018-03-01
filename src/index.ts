import prompt from '@jace1995/prompt';

enum Sign {Plus, Minus, Divide, Multiply}

class Task {
    number1: number;
    number2: number;
    sign: Sign;
    result: number;

    constructor() {
        this.number1 = this.randomNumber();
        this.number2 = this.randomNumber();
        this.sign = this.randomSign();
        this.result = this.calculate();
    }

    private randomNumber(): number {
        const res = Math.floor(Math.random() * 20 - 10)
        return res ? res : 10;
    }

    private randomSign(): number {
        return <Sign> Math.floor(Math.random()*4);
    }

    toString(){
        return `${this.number1} ${this.getSign()} ${this.number2} = `;
    }

    getSign() {
        switch (this.sign) {
            case Sign.Plus: return '+';
            case Sign.Minus: return '-';
            case Sign.Divide: return '/';
            case Sign.Multiply: return '*';
        }
    }

    calculate() {
        switch (this.sign) {
            case Sign.Plus: return this.number1 + this.number2;
            case Sign.Minus: return this.number1 - this.number2;
            case Sign.Divide: return this.number1 / this.number2;
            case Sign.Multiply: return this.number1 * this.number2;
        }
    }

}

(async function () {
    console.log(`THIS PROGRAM WAS DEVELOPED BY VOJD'(MIKHAIL ANISCHENKO)
ALL RIGHTS RESERVED
COPYING THIS CODE IS ILLEGAL!!!`)
    while (true) {
        const task = new Task();
        const userInput = await prompt(task.toString());

        if (+userInput == +task.calculate().toFixed(1)) {
            console.log('Давай ещё!');
        } else {
            console.log('Хватит бухать!!!');
            break;
        }
    }
})();