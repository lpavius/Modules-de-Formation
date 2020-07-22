import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.css']
})
export class ExerciceB1Component implements OnInit {

  chien = 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/05/%C3%A9duquer-un-chien-adulte-768x512.jpeg';

  chats = [
    'https://static.actu.fr/uploads/2020/02/ruse-chat.jpeg',
    'https://www.notre-planete.info/actualites/images/animaux/chat-dessous-tete.jpg',
    'https://vignette.wikia.nocookie.net/crossroads/images/9/9e/Chaton.jpg/revision/latest/scale-to-width-down/310?cb=20170521123413&path-prefix=fr'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
