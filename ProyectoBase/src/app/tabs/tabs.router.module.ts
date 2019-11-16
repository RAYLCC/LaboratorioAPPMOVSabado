import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CuentaPageModule } from '../cuenta/cuenta.module';

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
        redirectTo: 'tabs/cuenta',
        pathMatch: 'full',
        component: CuentaPageModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }