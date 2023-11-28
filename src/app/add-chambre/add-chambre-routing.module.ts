import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './add-chambre.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  {path:'addChambre', component: AddChambreComponent},

];

@NgModule({
  imports: [ CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddChambreRoutingModule { }
