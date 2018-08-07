import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    output: string = '';
    result: number = 0;
    value: number = 0;
    clear: boolean = true;
    operator: string = '';
    disabled: boolean = true;

    addToCalculation(val: number) {
        if (this.clear) {
            this.clear = false;
        }

        this.disabled = false;
        this.value = parseFloat(this.value.toString().concat(val.toString()));
        this.output = this.value.toString();
    }

    setOperator(operator: string) {
        this.operator = operator;
        this.disabled = true;

        if (this.result === 0) {
            this.result = this.value;
            this.value = 0;
        }

        if (this.value !== 0) {
            this.makeOperation();
        }
    }

    makeOperation() {
        let res: number = 0;

        if (this.operator === '+') {
            res = this.result + this.value;
        } else if (this.operator === '-') {
            res = this.result - this.value;
        } else if (this.operator === 'x') {
            res = this.result * this.value;
        } else {
            if (this.value === 0) {
                res = 0;
            } else {
                res = this.result / this.value;
            }
        }

        this.value = 0;
        this.result = res;
        this.output = res.toString();
        this.operator = '';
    }

    calculateResult() {
        this.makeOperation();
    }

    makeItClearAgain() {
        this.output = '';
        this.result = 0;
        this.value = 0;
        this.clear = true;
        this.operator = '';
        this.disabled = true;
    }
}
