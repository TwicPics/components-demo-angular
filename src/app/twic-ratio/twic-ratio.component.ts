import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-ratio',
  templateUrl: './twic-ratio.component.html',
  styleUrls: ['./twic-ratio.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, RouterLink, NgClass, TwicPicsComponentsModule]
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
