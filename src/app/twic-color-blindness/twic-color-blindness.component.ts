import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

const config = [
  {
    achromatopsia: "achromatopsia=0.5",
    deuteranopia: "deuteranopia=0.5",
    protanopia: "protanopia=0.5",
  },
  {
    achromatopsia: "achromatopsia=1",
    deuteranopia: "deuteranopia=1",
    protanopia: "protanopia=1",
  },
  {
    achromatopsia: "achromatopsia=0",
    deuteranopia: "deuteranopia=0",
    protanopia: "protanopia=0",
  },
];

@Component({
    selector: 'app-twic-color-blindness',
    templateUrl: './twic-color-blindness.component.html',
    styleUrls: ['./twic-color-blindness.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicColorBlindnessComponent {

  actualConfig = config[0];
  indiceConfig = 0;
  IMG_URL = `components/color-blindless/umbrellas.jpg`;

  updateIndice(): void {
    this.indiceConfig = (this.indiceConfig + 1) % config.length;
    this.actualConfig = config[this.indiceConfig];
  }

}
