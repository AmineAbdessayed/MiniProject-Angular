import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { TAdminComponent } from './t-admin/t-admin.component';

const routes: Routes = [

{path:'chambre', component: GetChambreComponent},
{ path: 'detail', component: DetailsChambreComponent },
{ path: 'admin', component: TAdminComponent },

//{path:'addChambre', loadChildren :()=> import('./add-chambre/add-chambre.module').then(m=>m.AddChambreModule)},
//{ path: 'update/:id', loadChildren  :()=> import('./update-chambre/update-chambre.module').then(m=>m.UpdateChambreModule) },
{path:'', redirectTo: 'chambre',pathMatch:'full'},
//{ path: 'detail', loadChildren  :()=> import('./details-chambre/details-chambre.module').then(m=>m.DetailsChambreModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
