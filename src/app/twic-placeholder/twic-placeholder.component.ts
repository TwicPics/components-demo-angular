import { Component, OnInit } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { NgClass } from '@angular/common';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-placeholder',
    templateUrl: './twic-placeholder.component.html',
    styleUrls: ['./twic-placeholder.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, NgClass, TwicPicsComponentsModule]
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
