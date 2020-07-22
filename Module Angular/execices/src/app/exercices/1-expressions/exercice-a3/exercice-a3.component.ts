import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})
export class ExerciceA3Component implements OnInit {

  // str: string[] = ['hello', 'world', '!'];

  constructor() { }

  ngOnInit(): void {
  }

  bonjour(): string {
    return 'Bonjour !';
  }

  operation(nb: number, nb1: number): number {
    console.log('ok ok');
    return nb / nb1;
  }

  concat(name: string[]): string {
    let str = ' ';

    for (let i = 0; i < name.length; i++) {
      str += name[i];
      if (i < name.length - 1) {
        str += ' ';
      } else {
        str += '.';
      }
    }
    return str;
  }
}
