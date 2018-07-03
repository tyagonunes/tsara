import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', redirectTo: '' },
  
  ]


export const routing = RouterModule.forRoot(appRoutes);