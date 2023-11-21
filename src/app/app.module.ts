import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwicPicsComponentsModule } from "@twicpics/components/angular17";
import { HomeComponent } from './home/home.component';
import { TwicWrapperComponent } from './components/twic-wrapper/twic-wrapper.component';
import { TwicAbstractComponent } from './components/twic-abstract/twic-abstract.component';
import { CodeComponent } from './components/twic-code/twic-code.component';
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
import { TwicModeComponent } from './twic-mode/twic-mode.component';
import { TwicPageTemplatingComponent } from './twic-page-templating/twic-page-templating.component';
import { TwicPlaceholderComponent } from './twic-placeholder/twic-placeholder.component';
import { TwicPositionComponent } from './twic-position/twic-position.component';
import { TwicPreTransformComponent } from './twic-pre-transform/twic-pre-transform.component';
import { TwicRatioComponent } from './twic-ratio/twic-ratio.component';
import { TwicRefitComponent } from './twic-refit/twic-refit.component';
import { TwicShortVideosComponent } from './twic-short-videos/twic-short-videos.component';
import { TwicSliderComponent } from './twic-slider/twic-slider.component';
import { TwicStateComponent } from './twic-state/twic-state.component';
import { TwicTransitionComponent } from './twic-transition/twic-transition.component';
import { TwicStyleDrivenComponent } from './twic-style-driven/twic-style-driven.component';
import { TwicModalComponent } from './twic-modal/twic-modal.component';
import { TwicSlideshowComponent } from './twic-slideshow/twic-slideshow.component';
import { TwicZoomComponent } from './twic-zoom/twic-zoom.component';
import { ModalComponent } from './components/modal/modal.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwicWrapperComponent,
    TwicAbstractComponent,
    CodeComponent,
    TwicAnchorComponent,
    TwicArtDirectionComponent,
    TwicBasicGridComponent,
    TwicBotComponent,
    TwicBulkLoadingComponent,
    TwicColorBlindnessComponent,
    TwicEagerComponent,
    TwicFlipCardsComponent,
    TwicFocusComponent,
    TwicGridAndZoomComponent,
    TwicHeroComponent,
    TwicIntrinsicComponent,
    TwicModeComponent,
    TwicPageTemplatingComponent,
    TwicPlaceholderComponent,
    TwicPositionComponent,
    TwicPreTransformComponent,
    TwicRatioComponent,
    TwicRefitComponent,
    TwicShortVideosComponent,
    TwicSliderComponent,
    TwicStateComponent,
    TwicTransitionComponent,
    TwicStyleDrivenComponent,
    TwicModalComponent,
    TwicSlideshowComponent,
    TwicZoomComponent,
    ModalComponent,
    SlideshowComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TwicPicsComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
