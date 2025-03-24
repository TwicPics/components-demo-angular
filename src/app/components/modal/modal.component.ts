import { Component, Input } from '@angular/core';
import { TwicPicsComponentsModule } from '@twicpics/components/angular19';
import { NgClass } from '@angular/common';

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [NgClass, TwicPicsComponentsModule]
})
export class ModalComponent {
  @Input() image!: { url: string, caption: string };
  @Input() show!: boolean;
  @Input() onClose!: () => void;
}
