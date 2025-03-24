import { Component } from '@angular/core';
import { Mode, TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

const IMG_URL = `components/fox.jpg`;

@Component({
  selector: 'app-twic-mode',
  templateUrl: './twic-mode.component.html',
  styleUrls: ['./twic-mode.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicModeComponent {


  indiceConfig = 0;
  config: Array<Mode> = [`cover`, `contain`];
  urlValues: Array<string> = [`${IMG_URL}?0`, `${IMG_URL}?1`];

  changeMode = () => {
    this.indiceConfig = (this.indiceConfig + 1) % this.config.length;
  };

}
