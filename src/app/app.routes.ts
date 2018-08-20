import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { CameraComponent } from './camera/camera.component';
import { FileAccessComponent } from './file-access/file-access.component';
import { OfflineStorageComponent } from './offline-storage/offline-storage.component';

const appRoutes: Routes = [
  
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'location', component: LocationComponent},
    { path: 'camera', component: CameraComponent},
    { path: 'file', component: FileAccessComponent},
    { path: 'offline-storage', component: OfflineStorageComponent},
    { path: '**', redirectTo: '' },
  
  ]


export const routing = RouterModule.forRoot(appRoutes);