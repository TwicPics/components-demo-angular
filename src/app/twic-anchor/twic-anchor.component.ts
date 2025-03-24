import { Component } from '@angular/core';
import { Anchor, TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { RouterLink } from '@angular/router';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';


@Component({
  selector: 'app-twic-anchor',
  templateUrl: './twic-anchor.component.html',
  styleUrls: ['./twic-anchor.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, RouterLink, TwicPicsComponentsModule]
})
export class TwicAnchorComponent {

  indice = 0;
  horizontalConfig: Array<Anchor> = [`center`, `left`, `right`];
  verticalConfig: Array<Anchor> = [`center`, `top`, `bottom`];

  updateIndice(): void {
    this.indice = (this.indice + 1) % this.horizontalConfig.length;
  }
}
