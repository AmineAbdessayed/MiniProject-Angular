import { Component, OnInit } from '@angular/core';
import { ServiceChambreService } from '../service-chambre.service';
import { Chambre, TypeChambre } from '../Entities/chambre';
import { Router } from '@angular/router';
import { Bloc } from '../Entities/bloc';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit{


  chambre: Chambre = new Chambre();
  types: TypeChambre[] = [
    TypeChambre.SINGLE,
    TypeChambre.DOUBLE,
    TypeChambre.TRIPLE
  ];
  blocs: Bloc[] = [];
  constructor( private chambreService: ServiceChambreService,
               private router :Router){


  }
  ngOnInit(): void {

    this.chambre.bloc = new Bloc(); // Initialize chambre.bloc with a new Bloc object

}


SaveChambre() {
  this.chambreService.createChambre(this.chambre).subscribe(
    () => {
      console.log('Chambre created successfully.');
      this.goToChambreList();
    },
    error => {
      console.error('Failed to create chambre:', error);
      // Handle the error and display an appropriate error message to the user
    }
  );
}

goToChambreList(){

  this.router.navigate(['/chambre']);


}


OnSubmit(){

  console.log(this.chambre);
  this.SaveChambre();
}

}
