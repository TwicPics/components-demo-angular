import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-basic-grid',
  templateUrl: './twic-basic-grid.component.html',
  styleUrls: ['./twic-basic-grid.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicBasicGridComponent {
}
