import { Component, Input } from '@angular/core';

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() image!: { url: string, caption: string };
  @Input() show!: boolean;
  @Input() onClose!: () => void;
}
