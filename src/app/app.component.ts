import { Component } from '@angular/core';
import { installTwicPics } from '@twicpics/components/angular19'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'TwicPics x Angular';
}

installTwicPics({
  domain: `https://demo.twic.it`,
  anticipation: 0.5,
})
