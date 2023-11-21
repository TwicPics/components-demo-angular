import { ChangeDetectorRef, Component } from '@angular/core';
import { StateEvent } from '@twicpics/components/angular17';

@Component({
  selector: 'app-twic-state',
  templateUrl: './twic-state.component.html',
  styleUrls: ['./twic-state.component.scss']
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
