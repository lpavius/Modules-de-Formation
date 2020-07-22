import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.css']
})
export class ExerciceB4Component implements OnInit {

  rubriqueActive: string;

  constructor() { }

  ngOnInit(): void {
  }

  myRubrique(unNumeroDeRubrique: string) {
    this.rubriqueActive = unNumeroDeRubrique;
    // console.dir(this.rubriqueActive);
  }

  methode2(unNumeroDeRubriqueActive: string): boolean {
    if (unNumeroDeRubriqueActive === this.rubriqueActive) {
      return true;
    } else {
      return false;
    }
  }
}
