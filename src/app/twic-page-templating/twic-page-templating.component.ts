import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-page-templating',
  templateUrl: './twic-page-templating.component.html',
  styleUrls: ['./twic-page-templating.component.scss']
})
export class TwicPageTemplatingComponent implements OnInit {


  images = [
    `components/src-not-set/woman-1.jpg`,
    `components/src-not-set/boat.jpg`,
    `components/src-not-set/vase.jpg`,
    `components/src-not-set/street.jpg`,
    `components/src-not-set/sea.jpg`,
    `components/src-not-set/flowers.jpg`,
    `components/src-not-set/bird.jpg`,
    `components/src-not-set/feet.jpg`,
    `components/src-not-set/lemons.jpg`,
    `components/src-not-set/swimming-pool.jpg`,
    `components/src-not-set/man.jpg`,
    `components/src-not-set/kodak.jpg`,
  ];
  toggleSrcText: string = ``;
  srcIsSet: boolean = false;

  setToggleSrcText(): void {
    this.toggleSrcText = `Click to to ${this.srcIsSet ? `unset` : `set`} the src property`;
  }

  toggleSrcSet(): void {
    this.srcIsSet = !this.srcIsSet;
    this.setToggleSrcText();
  }

  ngOnInit(): void {
    this.setToggleSrcText();
  }
}
