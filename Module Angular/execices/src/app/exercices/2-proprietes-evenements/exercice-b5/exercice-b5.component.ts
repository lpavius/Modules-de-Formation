import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b5',
  templateUrl: './exercice-b5.component.html',
  styleUrls: ['./exercice-b5.component.css']
})
export class ExerciceB5Component implements OnInit {

  myKeycode: any;

  constructor() { }

  ngOnInit(): void {
  }

  methodQuiRecoisLEvent(event: any) {
    this.myKeycode = event.target.value;
  }

  // suivre(x, y) {

  // }

}
