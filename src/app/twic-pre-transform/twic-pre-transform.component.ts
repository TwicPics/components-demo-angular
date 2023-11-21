import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-pre-transform',
    templateUrl: './twic-pre-transform.component.html',
    styleUrls: ['./twic-pre-transform.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicPreTransformComponent {

  IMG_URL: string = `components/man-hiding-his-hands.jpg`;

}
