import { Component } from '@angular/core';
import { Mode } from '@twicpics/components/angular17';

const config = [
  {
    mode: `cover` as Mode,
    refit: true
  },
  {
    mode: `cover` as Mode,
    refit: `5p`
  },
  {
    mode: `contain` as Mode,
    refit: true
  },
  {
    mode: `contain` as Mode,
    refit: `5p`
  },
];


@Component({
  selector: 'app-twic-refit',
  templateUrl: './twic-refit.component.html',
  styleUrls: ['./twic-refit.component.scss']
})
export class TwicRefitComponent {

  actualConfig = config[0];
  indiceConfig = 0;
  IMG_URL = `components/refit/dog-looking-water.jpg`;

  updateIndice(): void {
    this.indiceConfig = (this.indiceConfig + 1) % config.length;
    this.actualConfig = config[this.indiceConfig];
  }

}
