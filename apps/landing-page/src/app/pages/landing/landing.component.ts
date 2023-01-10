import { Component } from '@angular/core';

@Component({
  selector: 'ow-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  paymentList = [
    { img: 'assets/images/logo-dlocal.jpg', alt: 'dLocal' },
    { img: 'assets/images/paymentez.jpg', alt: 'Paymentez' },
    { img: 'assets/images/paypal.png', alt: 'PayPal' },
    { img: 'assets/images/totalnet.jpg', alt: 'TotalNet' },
  ];
}
