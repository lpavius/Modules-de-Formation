import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.css']
})
export class ExerciceA5Component implements OnInit {

  class = {
    name: 'Les peuplier',
    specialty: 'Immobilier',
    listOfRegistrants: [
      {
        firstName: 'Antoine',
        lastName: 'Franje',
        age: 18
      },
      {
        firstName: 'Sandra',
        lastName: 'Masde',
        age: 18
      },
      {
        firstName: 'Tim',
        lastName: 'Fodi',
        age: 18
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
