import prompt from '@jace1995/prompt';
import { Task, Sign } from './oper';

(async function() {
    console.log(`THIS PROGRAM WAS DEVELOPED BY VOJD'(MIKHAIL ANISCHENKO)
                    ALL RIGHTS RESERVED
                        COPYING THIS CODE IS ILLEGAL!!!`);
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