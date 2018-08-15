import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { CameraComponent } from './camera/camera.component';

const appRoutes: Routes = [
  
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'location', component: LocationComponent},
    { path: 'camera', component: CameraComponent},
    { path: '**', redirectTo: '' },
  
  ]


export const routing = RouterModule.forRoot(appRoutes);