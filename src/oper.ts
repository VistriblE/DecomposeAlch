import {random} from 'lodash';

export enum Sign {Plus, Minus, Divide, Multiply};

export class Task {
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
        // const res = Math.floor(Math.random() * 20 - 10)
        // return res ? res : 10;
        const res = random(-10, 9);
        return res == 0 ? 10 : res;
    }

    private randomSign(): number {
        return <Sign> random(0,3);
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