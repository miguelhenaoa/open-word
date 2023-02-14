import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ow-e-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e-billing.component.html',
  styleUrls: ['./e-billing.component.scss'],
})
export class EBillingComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Open Word | Facturación electrónica');
  }
}
