import { Component } from '@angular/core';
import { Anchor, TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

type Config = {
  anchor: Anchor,
  preTransform: string,
  ratio: string;
}

const config: Array<Config> = [
  {
    anchor: "center",
    preTransform: "flip=x",
    ratio: "4/3",
  },
  {
    anchor: "left",
    preTransform: "trit",
    ratio: "16/9",
  },
  {
    anchor: "right",
    preTransform: "focus=top-left/crop=50px50p",
    ratio: "21/9",
  },
];

@Component({
  selector: 'app-twic-bot',
  templateUrl: './twic-bot.component.html',
  styleUrls: ['./twic-bot.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})


export class TwicBotComponent {

  indiceConfig = 0;
  actualConfig = config[this.indiceConfig];

  updateIndice(): void {
    this.indiceConfig = (this.indiceConfig + 1) % config.length;
    this.actualConfig = config[this.indiceConfig];
  };
}
