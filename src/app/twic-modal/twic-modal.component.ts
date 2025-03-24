import { Component } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { NgFor } from '@angular/common';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-modal',
  templateUrl: './twic-modal.component.html',
  styleUrls: ['./twic-modal.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, NgFor, TwicPicsComponentsModule, ModalComponent]
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
