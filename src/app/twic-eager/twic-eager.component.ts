import { Component, OnInit, OnDestroy } from '@angular/core';

type Image = {
  src: string,
  preTransform: string,
  focus: string
}

@Component({
  selector: 'app-twic-eager',
  templateUrl: './twic-eager.component.html',
  styleUrls: ['./twic-eager.component.scss']
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
  paused = false;

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