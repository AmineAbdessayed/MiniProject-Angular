  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { GetChambreComponent } from './Gestion-chambre/get-chambre/get-chambre.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { AddChambreModule } from './Gestion-chambre/add-chambre/add-chambre.module';
  import { UpdateChambreModule } from './Gestion-chambre/update-chambre/update-chambre.module';
import { DetailsChambreComponent } from './Gestion-chambre/details-chambre/details-chambre.component';
import { TAdminComponent } from './t-admin/t-admin.component';


  @NgModule({
    declarations: [
      AppComponent,
      GetChambreComponent,
      DetailsChambreComponent,
      TAdminComponent,
      
    
      
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      AddChambreModule,
      UpdateChambreModule
      

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
