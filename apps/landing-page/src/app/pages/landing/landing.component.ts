import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ow-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Open Word | Inicio');
  }

  paymentList = [
    { img: 'assets/images/logo-dlocal.jpg', alt: 'dLocal' },
    { img: 'assets/images/paymentez.jpg', alt: 'Paymentez' },
    { img: 'assets/images/paypal.png', alt: 'PayPal' },
    { img: 'assets/images/totalnet.jpg', alt: 'TotalNet' },
  ];
}
