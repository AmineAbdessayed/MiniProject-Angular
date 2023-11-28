import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateChambreComponent } from './update-chambre.component';

const routes: Routes = [

  { path: 'update/:id', component: UpdateChambreComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateChambreRoutingModule { }
