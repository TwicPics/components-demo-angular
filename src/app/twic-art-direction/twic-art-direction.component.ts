import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-art-direction',
  templateUrl: './twic-art-direction.component.html',
  styleUrls: ['./twic-art-direction.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, TwicPicsComponentsModule]
})
export class TwicArtDirectionComponent {

  IMG_URL = `components/greece.jpg`;

}
