import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-bulk-loading',
  templateUrl: './twic-bulk-loading.component.html',
  styleUrls: ['./twic-bulk-loading.component.scss']
})
export class TwicBulkLoadingComponent implements OnInit {

  current = 2;
  last = 1;
  penultimate = 0;
  images = [
    {
      url: `components/bulk-loading/pool-1.jpg`,
    },
    {
      url: `components/bulk-loading/pool-2.jpg`,
    },
    {
      url: `components/bulk-loading/pool-3.jpg`,
    },
    {
      url: `components/bulk-loading/pool-4.jpg`,
    },
    {
      url: `components/bulk-loading/pool-5.jpg`,
    },
  ];
  indiceConfig = 0;


  changeImage(): void {
    this.current = (this.current + 1) % this.images.length;
    this.last = (this.last + 1) % this.images.length;
    this.penultimate = (this.penultimate + 1) % this.images.length;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
