import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | any;



  // rando: any;

  // constructor() {
  //   setInterval(() => this.rando = Math.random(), 800)
  // }

}
