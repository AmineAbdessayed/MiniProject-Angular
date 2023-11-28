import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddChambreRoutingModule } from './add-chambre-routing.module';
import { AddChambreComponent } from './add-chambre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddChambreComponent
  ],
  imports: [
    CommonModule,
    AddChambreRoutingModule,
    HttpClientModule,
    FormsModule

  ]
})
export class AddChambreModule { }
