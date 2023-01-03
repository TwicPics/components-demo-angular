import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TwicAnchorComponent } from './twic-anchor/twic-anchor.component';
import { TwicArtDirectionComponent } from './twic-art-direction/twic-art-direction.component';
import { TwicBasicGridComponent } from './twic-basic-grid/twic-basic-grid.component';
import { TwicBotComponent } from './twic-bot/twic-bot.component';
import { TwicBulkLoadingComponent } from './twic-bulk-loading/twic-bulk-loading.component';
import { TwicColorBlindnessComponent } from './twic-color-blindness/twic-color-blindness.component';
import { TwicEagerComponent } from './twic-eager/twic-eager.component';
import { TwicFlipCardsComponent } from './twic-flip-cards/twic-flip-cards.component';
import { TwicFocusComponent } from './twic-focus/twic-focus.component';
import { TwicGridAndZoomComponent } from './twic-grid-and-zoom/twic-grid-and-zoom.component';
import { TwicHeroComponent } from './twic-hero/twic-hero.component';
import { TwicIntrinsicComponent } from './twic-intrinsic/twic-intrinsic.component';
import { TwicModalComponent } from './twic-modal/twic-modal.component';
import { TwicModeComponent } from './twic-mode/twic-mode.component';
import { TwicPageTemplatingComponent } from './twic-page-templating/twic-page-templating.component';
import { TwicPlaceholderComponent } from './twic-placeholder/twic-placeholder.component';
import { TwicPositionComponent } from './twic-position/twic-position.component';
import { TwicPreTransformComponent } from './twic-pre-transform/twic-pre-transform.component';
import { TwicRatioComponent } from './twic-ratio/twic-ratio.component';
import { TwicShortVideosComponent } from './twic-short-videos/twic-short-videos.component';
import { TwicSliderComponent } from './twic-slider/twic-slider.component';
import { TwicSlideshowComponent } from './twic-slideshow/twic-slideshow.component';
import { TwicStateComponent } from './twic-state/twic-state.component';
import { TwicStyleDrivenComponent } from './twic-style-driven/twic-style-driven.component';
import { TwicTransitionComponent } from './twic-transition/twic-transition.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "anchor", component: TwicAnchorComponent },
  { path: "art-direction", component: TwicArtDirectionComponent },
  { path: "basic-grid", component: TwicBasicGridComponent },
  { path: "bot", component: TwicBotComponent },
  { path: "bulk-loading", component: TwicBulkLoadingComponent },
  { path: "color-blindness", component: TwicColorBlindnessComponent },
  { path: "eager", component: TwicEagerComponent },
  { path: "flip-cards", component: TwicFlipCardsComponent },
  { path: "focus", component: TwicFocusComponent },
  { path: "grid-and-zoom", component: TwicGridAndZoomComponent },
  { path: "hero", component: TwicHeroComponent },
  { path: "intrinsic", component: TwicIntrinsicComponent },
  { path: "modal", component: TwicModalComponent },
  { path: "mode", component: TwicModeComponent },
  { path: "page-templating", component: TwicPageTemplatingComponent },
  { path: "placeholder", component: TwicPlaceholderComponent },
  { path: "position", component: TwicPositionComponent },
  { path: "pre-transform", component: TwicPreTransformComponent },
  { path: "ratio", component: TwicRatioComponent },
  { path: "short-videos", component: TwicShortVideosComponent },
  { path: "slider", component: TwicSliderComponent },
  { path: "state", component: TwicStateComponent },
  { path: "slideshow", component: TwicSlideshowComponent },
  { path: "style-driven", component: TwicStyleDrivenComponent },
  { path: "transition", component: TwicTransitionComponent },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
