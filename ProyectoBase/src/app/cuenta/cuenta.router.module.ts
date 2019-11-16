import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaPage } from './cuenta.page';
import { TabsPage } from '../tabs/tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cuenta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cuenta/cuenta.module').then(m => m.CuentaPageModule)
          }
        ]
      },
      {
        path: 'movimientos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movimientos/movimientos.module').then(m => m.MovimientosPageModule)
          }
        ]
      },
      {
        path: 'resumen',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resumen-chart/resumen-chart.module').then(m => m.ResumenChartPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaPageRoutingModule { }