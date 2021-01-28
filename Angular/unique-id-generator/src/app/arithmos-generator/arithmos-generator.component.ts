import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmos-generator',
  templateUrl: './arithmos-generator.component.html',
  styleUrls: ['./arithmos-generator.component.css'],
})
export class ArithmosGeneratorComponent implements OnInit {
  constructor() {}

  finalArithmos;

  ngOnInit(): void {
    this.createArithmos();
  }

  createArithmos() {
    const maxarithmos = 'A999995';
    let numbers = maxarithmos.substring(1);
    // let letter = maxarithmos.substring(0, 1);
    let uniLetter = maxarithmos.charCodeAt(0);

    for (let i = 0; i < 10; i++) {
      const finalLetter = String.fromCharCode(uniLetter);

      this.finalArithmos = finalLetter + numbers;

      console.log(this.finalArithmos);

      let numNumbers = parseInt(numbers, 10);
      numNumbers++;

      numbers = ('00000' + numNumbers).substr(-6);

      if (numbers === '000000') {
        uniLetter++;
        // console.log(finalLetter);
      }

      if (uniLetter === 91) {
        uniLetter = uniLetter + 6;
      }

      if (uniLetter > 122) {
        console.log('ALERT: arithmos numbers run out');
      }
    }
  }
}
