import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { RouterLink } from '@angular/router';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-intrinsic',
    templateUrl: './twic-intrinsic.component.html',
    styleUrls: ['./twic-intrinsic.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, RouterLink, TwicPicsComponentsModule]
})
export class TwicIntrinsicComponent {
}
