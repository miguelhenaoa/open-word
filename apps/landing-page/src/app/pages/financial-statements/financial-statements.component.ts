import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ow-financial-statements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-statements.component.html',
  styleUrls: ['./financial-statements.component.scss'],
})
export class FinancialStatementsComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Open Word | Estados financieros');
  }
}
