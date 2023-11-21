import { Component, OnInit } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular17';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-short-videos',
    templateUrl: './twic-short-videos.component.html',
    styleUrls: ['./twic-short-videos.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, TwicPicsComponentsModule]
})
export class TwicShortVideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
