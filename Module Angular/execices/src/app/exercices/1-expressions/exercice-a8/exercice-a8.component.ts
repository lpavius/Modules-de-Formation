import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a8',
  templateUrl: './exercice-a8.component.html',
  styleUrls: ['./exercice-a8.component.css']
})
export class ExerciceA8Component implements OnInit {

  cars = [
    {
      model: 'renault',
      power: '200 chevaux',
      price: 35000,
      fabricationDate: new Date(2005, 4, 15) // 2005-04-15 14:30:40 1113575440
    },
    {
      model: 'peugeot',
      power: '200 chevaux',
      price: 34000,
      fabricationDate: new Date(-931335630) // 1999-07-07 8:20:30
    },
    {
      model: 'toyota',
      power: '200 chevaux',
      price: 50000,
      fabricationDate: 1446250510 // 2015-10-31 0:15:10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
