import { Component } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { NgFor } from '@angular/common';
import { TwicAbstractComponent } from '../components/twic-abstract/twic-abstract.component';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-twic-slider',
  templateUrl: './twic-slider.component.html',
  styleUrls: ['./twic-slider.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, TwicAbstractComponent, NgFor, TwicPicsComponentsModule]
})
export class TwicSliderComponent {

  images = [
    {
      url: `components/slider/pantone.jpg`,
    },
    {
      url: `components/slider/coffee.jpg`,
    },
    {
      url: `components/slider/reading.jpg`,
    },
    {
      url: `components/slider/cat-2.jpg`,
    },
    {
      url: `components/slider/mirror.jpg`,
    },
    {
      url: `components/slider/books.jpg`,
    },
    {
      url: `components/slider/sea.jpg`,
    },
    {
      url: `components/slider/frames.jpg`,
    },
    {
      url: `components/slider/dried-flower.jpg`,
    },
    {
      url: `components/slider/dune.jpg`,
    },
    {
      url: `components/slider/coffee-2.jpg`,
    },
    {
      url: `components/slider/yak.jpg`,
    },
    {
      url: `components/slider/dried-flower-2.jpg`,
    },
    {
      url: `components/slider/guitar.jpg`,
    },
    {
      url: `components/slider/field.jpg`,
    },
    {
      url: `components/slider/woman-and-sand.jpg`,
    },
  ];

}
