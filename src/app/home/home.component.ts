import { Component, OnInit } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { TwicWrapperComponent } from '../components/twic-wrapper/twic-wrapper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TwicWrapperComponent, NgFor, RouterLink, NgIf, TwicPicsComponentsModule]
})
export class HomeComponent implements OnInit {

  categories = [
    {
      title: `Use cases`,
      items: [
        {
          route: `/art-direction`,
          imgSrc: `components/greece.jpg`,
          title: `Art directions`,
        },
        {
          route: `/basic-grid`,
          imgSrc: `football.jpg`,
          title: `Basic example`,
        },
        {
          route: `/bulk-loading`,
          imgSrc: `components/bulk-loading/pool-1.jpg`,
          focus: `50px100p`,
          title: `Bulk loading`,
        },
        {
          route: `/color-blindness`,
          imgSrc: `components/color-blindless/umbrellas.jpg`,
          title: `Color blindness`,
        },
        {
          route: `/critical-image`,
          imgSrc: `puppy-dressed-as-a-reindeer.jpeg`,
          title: `Critical Image`,
        },
        {
          route: `/flip-cards`,
          imgSrc: `components/flip/orange-1.jpg`,
          title: `Flip cards`,
        },
        {
          route: `/grid-and-zoom`,
          imgSrc: `components/portraits/woman-1.jpg`,
          title: `Grid & zoom`,
        },
        {
          route: `/hero`,
          imgSrc: `components/goldenGate.jpg`,
          title: `Hero image`,
        },
        {
          route: `/modal`,
          imgSrc: `components/modal/seagull.jpg`,
          title: `Modal`,
        },
        {
          route: `/page-templating`,
          focus: `bottom`,
          imgSrc: `components/woman.jpg`,
          title: `Page templating`,
        },
        {
          route: `/short-videos`,
          videoSrc: `video/skater.mp4`,
          title: `Short videos`,
          intrinsic: "1280x720",
        },
        {
          route: `/slider`,
          imgSrc: `components/slider/pantone.jpg`,
          title: `Slider`,
        },
        {
          route: `/slideshow`,
          imgSrc: `components/slideshow/space-1.jpg`,
          title: `Slideshow`,
        },
        {
          route: `/style-driven`,
          imgSrc: `components/horse.jpg`,
          title: `Style driven`,
        },
      ],
    },
    {
      title: `Properties`,
      items: [
        {
          route: `/anchor`,
          imgSrc: `components/anchor/anchor.jpg`,
          title: `anchor`,
        },
        {
          route: `/bot`,
          imgSrc: `components/bot/robot.jpg`,
          title: `bot`,
        },
        {
          route: `/eager`,
          imgSrc: `components/eager/subway-1.jpg`,
          preTransform: `flip=x`,
          title: `eager`,
        },
        {
          route: `/focus`,
          imgSrc: `components/puppy.jpg`,
          title: `focus`,
        },
        {
          route: `/intrinsic`,
          imgSrc: `components/intrinsic/moon.jpg`,
          focus: `50px50p`,
          title: `intrinsic`,
        },
        {
          route: `/mode`,
          imgSrc: `components/fox.jpg`,
          title: `mode`,
        },
        {
          route: `/placeholder`,
          imgSrc: `components/cat.jpg`,
          focus: `50px50p`,
          title: `placeholder`,
        },
        {
          route: `/position`,
          imgSrc: `components/position/horse.jpg`,
          focus: `50px50p`,
          title: `position`,
        },
        {
          route: `/pre-transform`,
          imgSrc: `components/man-hiding-his-hands.jpg`,
          title: `preTransform`,
        },
        {
          route: `/ratio`,
          imgSrc: `components/woman-and-winter.jpg`,
          focus: `50px50p`,
          title: `ratio`,
        },
        {
          route: `/refit`,
          imgSrc: `components/refit/dog-looking-water.jpg`,
          focus: `50px50p`,
          refit: `5p`,
          title: `refit`,
        },
        {
          route: `/state`,
          imgSrc: `components/state/autumn.jpg`,
          title: `state`,
        },
        {
          route: `/transition`,
          imgSrc: `components/peacock.jpg`,
          title: `transition`,
        },
        {
          route: `/zoom`,
          imgSrc: `components/zoom/stamps-on-booklet.jpg`,
          title: `zoom`
        }
      ],
    },
  ];

  constructor() { }

  getFocus(focus: string | undefined): string {
    return focus || `auto`;
  };

  getRefit(items: any): boolean | string {
    return items[`refit`] || false;
  }

  ngOnInit(): void {
  }

}
