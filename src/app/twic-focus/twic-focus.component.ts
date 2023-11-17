import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { RouterLink } from '@angular/router';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-focus',
    templateUrl: './twic-focus.component.html',
    styleUrls: ['./twic-focus.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, RouterLink, TwicPicsComponentsModule, NgIf]
})
export class TwicFocusComponent {

  IMG_URL = `components/puppy.jpg`;
  focusArray = [``, `1920x1282`, `auto`];
  focusIndex = 0;

  onChangeFocus = () => {
    this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
  };

}
