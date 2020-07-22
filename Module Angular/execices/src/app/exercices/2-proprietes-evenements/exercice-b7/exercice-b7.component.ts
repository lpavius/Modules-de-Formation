import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b7',
  templateUrl: './exercice-b7.component.html',
  styleUrls: ['./exercice-b7.component.css']
})
export class ExerciceB7Component implements OnInit {

  proprieteStyle = [
    {
      width: 30,
      height: 30,
      bgColor: 'blue'
    },
    {
      width: 40,
      height: 40,
      bgColor: 'green'
    },
    {
      width: 50,
      height: 50,
      bgColor: 'red'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
