import { Component } from '@angular/core';
import { Anchor } from '@twicpics/components/angular16';


@Component({
  selector: 'app-twic-anchor',
  templateUrl: './twic-anchor.component.html',
  styleUrls: ['./twic-anchor.component.scss']
})
export class TwicAnchorComponent {

  indice = 0;
  horizontalConfig: Array<Anchor> = [`center`, `left`, `right`];
  verticalConfig: Array<Anchor> = [`center`, `top`, `bottom`];

  updateIndice(): void {
    this.indice = (this.indice + 1) % this.horizontalConfig.length;
  }
}
