import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-transition',
  templateUrl: './twic-transition.component.html',
  styleUrls: ['./twic-transition.component.scss']
})
export class TwicTransitionComponent implements OnInit {

  constructor() { }

  IMG_URL: string = `components/peacock.jpg`;
  buttonText?: string;
  showTransition: boolean = false;

  setButtonText(): void {
    this.buttonText = this.showTransition ? `Click to show the images` : `Click to reveal the transitions`;
  }

  toggleTransition(): void {
    this.showTransition = !this.showTransition;
    this.setButtonText();
  }

  ngOnInit(): void {
    this.setButtonText();
  }

}
