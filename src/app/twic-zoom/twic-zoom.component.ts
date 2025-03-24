import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-zoom',
  templateUrl: './twic-zoom.component.html',
  styleUrls: ['./twic-zoom.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicZoomComponent {
  zoom: number = 1.5;
  changeZoom(): void {
    this.zoom += 0.5;
    if (this.zoom > 4) {
      this.zoom = 1.5;
    }
  }
}
