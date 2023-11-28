import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateChambreRoutingModule } from './update-chambre-routing.module';
import { UpdateChambreComponent } from './update-chambre.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateChambreComponent,
  ],
  imports: [
    CommonModule,
    UpdateChambreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UpdateChambreModule { }
