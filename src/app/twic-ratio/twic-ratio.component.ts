import { Component } from '@angular/core';

@Component({
  selector: 'app-twic-ratio',
  templateUrl: './twic-ratio.component.html',
  styleUrls: ['./twic-ratio.component.scss']
})
export class TwicRatioComponent {

  IMG_URL: string = `components/woman-and-winter.jpg`;
  ratioValues: Array<string> = [`2.39`, `16/9`, `4/3`, ``, `0.75`];
  ratioIndex: number = 0;
  fullWidthAera: boolean = true;

  changeRatio(): void {
    this.ratioIndex = (this.ratioIndex + 1) % this.ratioValues.length;
  }

  toggleWidth(): void {
    this.fullWidthAera = !this.fullWidthAera;
  }
}
