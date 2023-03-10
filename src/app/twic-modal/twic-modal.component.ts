import { Component } from '@angular/core';

@Component({
  selector: 'app-twic-modal',
  templateUrl: './twic-modal.component.html',
  styleUrls: ['./twic-modal.component.scss']
})
export class TwicModalComponent {

  images = [
    {
      "url": `components/modal/seagull.jpg`,
      "caption": `seagulls`,
    },
    {
      "url": `components/modal/shell.jpg`,
      "caption": `shell`,
    },
    {
      "url": `components/modal/jelly-fish.jpg`,
      "caption": `jelly fish`,
    },
    {
      "url": `components/modal/turtle.jpg`,
      "caption": `turtle`,
    },
  ];

  idModalToOpen: null | number = null;

  openModal(idModalToOpen: number) {
    this.idModalToOpen = idModalToOpen;
  }

  closeModal = (): void => {
    this.idModalToOpen = null;
  }
}
