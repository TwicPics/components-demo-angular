import { Component } from '@angular/core';

@Component({
  selector: 'app-twic-focus',
  templateUrl: './twic-focus.component.html',
  styleUrls: ['./twic-focus.component.scss']
})
export class TwicFocusComponent {

  IMG_URL = `components/puppy.jpg`;
  focusArray = [``, `1920x1282`, `auto`];
  focusIndex = 0;

  onChangeFocus = () => {
    this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
  };

}
