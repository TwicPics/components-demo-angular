import { Component } from '@angular/core';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-critical-image',
  templateUrl: './twic-critical-image.component.html',
  styleUrls: ['./twic-critical-image.component.scss'],
  standalone: true,
  imports: [CodeComponent, TwicWrapperComponent, TwicAbstractComponent, TwicPicsComponentsModule]
})
export class TwicCriticalImageComponent { }
