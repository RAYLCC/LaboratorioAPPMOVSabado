import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuentaPage } from './cuenta.page';
import { AgregarCuentaPageModule } from './agregar-cuenta/agregar-cuenta.module';



@NgModule({
  imports: [
    AgregarCuentaPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CuentaPage
      }
    ])
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
