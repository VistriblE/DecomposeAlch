"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("@jace1995/prompt");
var Sign;
(function (Sign) {
    Sign[Sign["Plus"] = 0] = "Plus";
    Sign[Sign["Minus"] = 1] = "Minus";
    Sign[Sign["Divide"] = 2] = "Divide";
    Sign[Sign["Multiply"] = 3] = "Multiply";
})(Sign || (Sign = {}));
class Task {
    constructor() {
        this.number1 = this.randomNumber();
        this.number2 = this.randomNumber();
        this.sign = this.randomSign();
        this.result = this.calculate();
    }
    randomNumber() {
        const res = Math.floor(Math.random() * 20 - 10);
        return res ? res : 10;
    }
    randomSign() {
        return Math.floor(Math.random() * 4);
    }
    toString() {
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
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const task = new Task();
            const userInput = yield prompt_1.default(task.toString());
            if (+userInput == +task.calculate().toFixed(1)) {
                console.log('Давай ещё!');
            }
            else {
                console.log('Хватит бухать!!!');
                break;
            }
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9ub2RlanMyL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBc0M7QUFFdEMsSUFBSyxJQUFvQztBQUF6QyxXQUFLLElBQUk7SUFBRSwrQkFBSSxDQUFBO0lBQUUsaUNBQUssQ0FBQTtJQUFFLG1DQUFNLENBQUE7SUFBRSx1Q0FBUSxDQUFBO0FBQUEsQ0FBQyxFQUFwQyxJQUFJLEtBQUosSUFBSSxRQUFnQztBQUV6QztJQU1JO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLFlBQVk7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxVQUFVO1FBQ2QsTUFBTSxDQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkQsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEQsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDckQsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0QsQ0FBQztJQUNMLENBQUM7Q0FFSjtBQUVELENBQUM7O1FBQ0csT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNWLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDeEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRWhELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMifQ==