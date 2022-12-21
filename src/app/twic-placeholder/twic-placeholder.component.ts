import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-placeholder',
  templateUrl: './twic-placeholder.component.html',
  styleUrls: ['./twic-placeholder.component.scss']
})
export class TwicPlaceholderComponent implements OnInit {

  IMG_URL: string = `components/cat.jpg`;
  showPlaceholder: boolean = false;
  togglePlaceholderText: string = ``;

  setTogglePlaceholderText(): void {
    this.togglePlaceholderText = this.showPlaceholder ? `Click to reveal images` : `Click to reveal placeholders`;
  }

  togglePlaceholder(): void {
    this.showPlaceholder = !this.showPlaceholder;
    this.setTogglePlaceholderText();
  }

  ngOnInit(): void {
    this.setTogglePlaceholderText();
  }

}
