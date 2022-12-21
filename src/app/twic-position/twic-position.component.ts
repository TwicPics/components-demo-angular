import { Component } from '@angular/core';

@Component({
  selector: 'app-twic-position',
  templateUrl: './twic-position.component.html',
  styleUrls: ['./twic-position.component.scss']
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
