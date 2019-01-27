import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayNum1 = "";
  displayNum2 = "";
  displayOp = "";
  history = [];

  opActive = false;

  appendNum(value) {
    if (this.opActive) {
      this.displayNum2 += value;
    } else {
      this.displayNum1 += value;
    }
  }

  appendOp(value) {
    this.opActive = true;
    if (this.displayOp == "") {
      this.displayOp = value;
    }
  }
  
  result() {
    let result: number;
    let num1 = parseInt(this.displayNum1);
    let num2 = parseInt(this.displayNum2);

    if (isNaN(num2)) {
      num2 = 0;
    }

    switch(this.displayOp) {
      case "": {
        result = num1;
        break;
      }
      case "+": {
        result = this.add(num1,num2);
        break;
      }
      case "-": {
        result = this.sub(num1,num2);
        break;
      }
      case "*": {
        result = this.mul(num1,num2);
        break;
      }
      case "/": {
        result = this.div(num1,num2);
        break;
      }
      case "^": {
        result = this.pow(num1,num2);
        break;
      }
    }

    result = this.toInt(result);
    if (isNaN(result)){
      result = 0; 
    } 

    let opStr = num1 + " " + this.displayOp + " " + num2 + " = " + result;
    this.history.unshift(opStr);
    this.clear();
    
    this.displayNum1 = String(result);
  }

  back() {
    if (this.opActive) {
      this.displayNum2 = this.displayNum2.substring(0, this.displayNum2.length - 1);
    } else {
      this.displayNum1 = this.displayNum1.substring(0, this.displayNum1.length - 1);
    }
  }

  clear() {
    this.displayNum1 = "";
    this.displayNum2 = "";
    this.displayOp = "";
    this.opActive = false;
  }

  clearHistory() {
    this.history = [""];
  }

  add(a,b) {
    return a + b;
  }

  sub(a,b) {
    return a - b;
  }

  mul(a,b) {
    return a * b;
  }

  div(a,b) {
    return a / b;
  }

  pow(a,b) {
    return a ** b;
  }

  toInt(a) {
    return a - (a%1)
  }
}