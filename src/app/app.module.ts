  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { GetChambreComponent } from './get-chambre/get-chambre.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { AddChambreModule } from './add-chambre/add-chambre.module';
  import { UpdateChambreModule } from './update-chambre/update-chambre.module';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
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
