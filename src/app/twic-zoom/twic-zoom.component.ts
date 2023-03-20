import { Component } from '@angular/core';

@Component({
  selector: 'app-twic-zoom',
  templateUrl: './twic-zoom.component.html',
  styleUrls: ['./twic-zoom.component.scss']
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
