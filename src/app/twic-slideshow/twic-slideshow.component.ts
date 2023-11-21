import { Component } from '@angular/core';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';
import { CodeComponent } from '../components/twic-code/twic-code.component';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
    selector: 'app-twic-slideshow',
    templateUrl: './twic-slideshow.component.html',
    styleUrls: ['./twic-slideshow.component.scss'],
    standalone: true,
    imports: [TwicWrapperComponent, TwicAbstractComponent, CodeComponent, SlideshowComponent]
})
export class TwicSlideshowComponent {

  images = [
    {
      url: `components/slideshow/space-1.jpg`,
      focus: ``,
    },
    {
      url: `components/slideshow/space-2.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-3.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-4.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-5.jpg`,
      focus: `50px100p`,
    },
  ];

}
