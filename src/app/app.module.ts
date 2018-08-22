import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';
import {ReactiveFormsModule} from "@angular/forms"
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import * as jQuery from 'jquery';
import { routing } from './app.routes';
import { LocationComponent } from './location/location.component';
import { CameraComponent } from './camera/camera.component';
import { ComponentsModule } from './components/components.module';
import { FileAccessComponent } from './file-access/file-access.component';
import { OfflineStorageComponent } from './offline-storage/offline-storage.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashboardComponent,
    LocationComponent,
    CameraComponent,
    FileAccessComponent,
    OfflineStorageComponent,
    PushNotificationComponent
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSnackBarModule,
    MaterializeModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
