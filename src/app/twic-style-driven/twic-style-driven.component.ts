import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-style-driven',
    templateUrl: './twic-style-driven.component.html',
    styleUrls: ['./twic-style-driven.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicStyleDrivenComponent {

  IMG_URL: string = `components/horse.jpg`;

}
