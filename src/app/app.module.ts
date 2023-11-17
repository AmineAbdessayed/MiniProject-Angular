import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';

@NgModule({
  declarations: [
    AppComponent,
    AddChambreComponent,
    GetChambreComponent,
    UpdateChambreComponent,
    DetailsChambreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
