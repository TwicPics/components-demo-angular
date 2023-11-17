import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { RouterLink } from '@angular/router';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-position',
    templateUrl: './twic-position.component.html',
    styleUrls: ['./twic-position.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, RouterLink, TwicPicsComponentsModule]
})
export class TwicPositionComponent {

  landscapeImgUrl = `components/position/horse.jpg`;
  portraitImgUrl = `components/position/forest.jpg`;
  horizontalPositionArray = [`left`, `right`, `center`];
  horizontalPositionIndex = 0;
  verticalPositionArray = [`top`, `bottom`, `center`];
  verticalPositionIndex = 0;

  changePosition() {
    this.horizontalPositionIndex =
      (this.horizontalPositionIndex + 1) % this.horizontalPositionArray.length;
    this.verticalPositionIndex =
      (this.verticalPositionIndex + 1) % this.verticalPositionArray.length;
  }

}
