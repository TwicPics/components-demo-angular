import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { StateEvent } from '@twicpics/components/angular17';

@Component({
  selector: 'Slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() images!: { url: string, focus: string }[];

  activeIndex = 0;
  imageReady: boolean = false;
  interval: any;
  isPaused: boolean = false;
  timerDuration = 3000;


  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.updateIndex(this.activeIndex + 1);
      }
    }, this.timerDuration);
  }

  updateIndex(newIndex: number) {
    let _newIndex = newIndex;
    if (newIndex < 0) {
      this.activeIndex = this.images.length - 1;
    } else if (newIndex >= this.images.length) {
      _newIndex = 0;
    }
    this.activeIndex = _newIndex;
  }

  setPaused(value: boolean): void {
    this.isPaused = value;
  }

  onStateChange(stateEvent: StateEvent) {
    const { state } = stateEvent;
    this.imageReady = state === `done` || state === `error`;
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
