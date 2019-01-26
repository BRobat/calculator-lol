import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value = "";
  history = [];

  append(value) {
    this.value += value;
  }
  
  result() {
    this.history.unshift(this.value);

    let numbers = [];
    let operations = [];
    let val = this.value.split(' ');

    for(let i = 0; i < val.length; i++) {
      
      try {
        numbers.push(parseInt(val[i]))
      } catch (error) {
      }

    }

    console.log(numbers,operations)

  }

  clear() {
    this.value = "";
  }
  
  rpo(numArray, opArray) {
    //reverse polish notation

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

}


/*
TODO:
get value
turn it into array of numbers and symbols V
then use reverse polish notation
calculate



*/
