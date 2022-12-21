import { Component, Input } from '@angular/core';


@Component({
  selector: 'TwicAbstract',
  templateUrl: './twic-abstract.component.html',
  styleUrls: ['./twic-abstract.component.scss']
})
export class TwicAbstractComponent {
  @Input() title?: string;
}
