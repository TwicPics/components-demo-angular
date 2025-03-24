import { ChangeDetectorRef, Component } from '@angular/core';
import { StateEvent, TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-state',
  templateUrl: './twic-state.component.html',
  styleUrls: ['./twic-state.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicStateComponent {

  config = [
    {
      src: "components/state/autumn.jpg",
    },
    {
      src: "components/state/winter.jpg",
    },
    {
      src: "components/state/spring.jpg",
    },
    {
      src: "components/state/summer.jpg",
    },
  ];
  indice = 0;
  imageReady = false;
  state?: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  changeImage(): void {
    this.indice = (this.indice + 1) % this.config.length;
  }

  onStateChange(stateEvent: StateEvent) {
    const { state } = stateEvent;
    this.state = state;
    this.imageReady = state === `done` || state === `error`;
    this.changeDetector.detectChanges();
  }
}
