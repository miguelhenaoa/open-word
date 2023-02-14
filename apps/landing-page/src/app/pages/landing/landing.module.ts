import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LandingComponent } from './landing.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
  ],
})
export class LandingModule {}
