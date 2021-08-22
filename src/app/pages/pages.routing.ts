import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccoutSettingsComponent } from '../pages/acountSettings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'grafica', component: GraficaComponent, data: { titulo: 'Grafica' } },
            { path: 'Settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
            { path: 'Promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'Rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
