import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';

const routes: Routes = [

{path:'chambre', component: GetChambreComponent},
{path:'addChambre', component: AddChambreComponent},
{path:'', redirectTo: 'chambre',pathMatch:'full'},
{ path: 'details-chambre/:id', component: DetailsChambreComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
