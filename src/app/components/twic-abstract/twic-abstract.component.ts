import { Component, Input } from '@angular/core';


@Component({
    selector: 'TwicAbstract',
    templateUrl: './twic-abstract.component.html',
    styleUrls: ['./twic-abstract.component.scss'],
    standalone: true
})
export class TwicAbstractComponent {
  @Input() title?: string;
}
