import { Component } from '@angular/core';
import { Mode } from '@twicpics/components/angular14';

const IMG_URL = `components/fox.jpg`;

@Component({
  selector: 'app-twic-mode',
  templateUrl: './twic-mode.component.html',
  styleUrls: ['./twic-mode.component.scss']
})
export class TwicModeComponent {


  indiceConfig = 0;
  config: Array<Mode> = [`cover`, `contain`];
  urlValues: Array<string> = [`${IMG_URL}?0`, `${IMG_URL}?1`];

  changeMode = () => {
    this.indiceConfig = (this.indiceConfig + 1) % this.config.length;
  };

}
