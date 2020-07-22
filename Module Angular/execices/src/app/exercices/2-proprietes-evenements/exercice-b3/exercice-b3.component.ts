import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.css']
})
export class ExerciceB3Component implements OnInit {

  nombre = 0;
  plusOrMinus = 'incrémentation';

  constructor() { }

  ngOnInit(): void {
  }

  plusUn() {
    if (this.plusOrMinus === 'incrémentation') {
      this.nombre += 1;
      if (this.nombre === 10) {
        this.plusOrMinus = 'décrémentation';
      }
    } else {
      this.nombre -= 1;
      if (this.nombre === 0) {
        this.plusOrMinus = 'incrémentation';
      }
    }
  }

}
