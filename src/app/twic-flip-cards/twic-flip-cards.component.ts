import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-flip-cards',
  templateUrl: './twic-flip-cards.component.html',
  styleUrls: ['./twic-flip-cards.component.scss']
})
export class TwicFlipCardsComponent {

  cards = [
    {
      front: {
        url: `components/flip/orange-1.jpg`,
      },
      back: {
        url: `components/flip/orange-2.jpg`,
      },
    },
    {
      front: {
        url: `components/flip/fig-1.jpg`,
      },
      back: {
        url: `components/flip/fig-2.jpg`,
      },
    },
    {
      front: {
        url: `components/flip/cherry-3.jpg`,
      },
      back: {
        url: `components/flip/cherry-2.jpg`,
      },
    },
    {
      front: {
        url: `components/flip/melon-1.jpg`,
      },
      back: {
        url: `components/flip/melon-2.jpg`,
      },
    },
  ];

}
