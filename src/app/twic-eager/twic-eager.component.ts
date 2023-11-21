import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { NgIf, NgStyle, NgFor } from '@angular/common';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

type Image = {
  src: string,
  preTransform: string,
  focus: string
}

@Component({
    selector: 'app-twic-eager',
    templateUrl: './twic-eager.component.html',
    styleUrls: ['./twic-eager.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, NgIf, NgStyle, NgFor, TwicPicsComponentsModule]
})
export class TwicEagerComponent implements OnInit, OnDestroy {

  interval: any;
  images: Array<Image> = [
    {
      src: `components/eager/subway-1.jpg`,
      preTransform: "flip=x",
      focus: ``,
    },
    {
      src: `components/eager/subway-2.jpg`,
      focus: `50px30p`,
      preTransform: ``
    },
    {
      src: `components/eager/subway-3.jpg`,
      focus: ``,
      preTransform: ``
    },
    {
      src: `components/eager/subway-4.jpg`,
      focus: ``,
      preTransform: ``
    },
    {
      src: `components/eager/subway-5.jpg`,
      focus: ``,
      preTransform: ``
    },
    {
      src: `components/eager/subway-6.jpg`,
      focus: ``,
      preTransform: ``
    },
  ];
  indice = 0;
  paused = true;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.paused) {
        this.indice = 0;
      } else {
        this.indice = (this.indice + 1) % this.images.length;
        this.paused = this.indice === 0;
      }
    }, 1000);
  }

  startAnimation(): void {
    this.indice = 1;
    this.paused = false;
  };

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
