import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CustomCardComponent,
    CardViewerComponent
  ],
  declarations: [CustomCardComponent, CardViewerComponent]
})
export class ComponentsModule { }
