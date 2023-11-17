import { Component, OnInit } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { NgClass } from '@angular/common';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-transition',
    templateUrl: './twic-transition.component.html',
    styleUrls: ['./twic-transition.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, NgClass, TwicPicsComponentsModule]
})
export class TwicTransitionComponent implements OnInit {

  constructor() { }

  IMG_URL: string = `components/peacock.jpg`;
  buttonText?: string;
  showTransition: boolean = false;

  setButtonText(): void {
    this.buttonText = this.showTransition ? `Click to show the images` : `Click to reveal the transitions`;
  }

  toggleTransition(): void {
    this.showTransition = !this.showTransition;
    this.setButtonText();
  }

  ngOnInit(): void {
    this.setButtonText();
  }

}
