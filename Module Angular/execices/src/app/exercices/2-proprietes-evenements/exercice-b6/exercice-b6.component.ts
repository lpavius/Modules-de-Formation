import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b6',
  templateUrl: './exercice-b6.component.html',
  styleUrls: ['./exercice-b6.component.css']
})
export class ExerciceB6Component implements OnInit {

  newsletter = false;
  cgu = false;
  valide = true;

  constructor() { }

  ngOnInit(): void {
  }

  formValid() {
    if (this.newsletter === true && this.cgu === true) {
      this.valide = false;
    }
  }
}
