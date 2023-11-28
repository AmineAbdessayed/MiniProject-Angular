import { Component, OnInit } from '@angular/core';
import { ServiceChambreService } from 'src/app/service-chambre.service';
import { Chambre } from 'src/app/Models/chambre';
import { TypeChambre } from 'src/app/Models/chambre';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/Models/bloc';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {

  chambre: Chambre = new Chambre();
  types: TypeChambre[] = [
    TypeChambre.SIMPLE,
    TypeChambre.DOUBLE,
    TypeChambre.TRIPLE
  ];

  constructor(private chambreService: ServiceChambreService, private router: Router) {}

  ngOnInit(): void {
    this.initializeChambre();
  }

  initializeChambre(): void {
    this.chambre = new Chambre(); // Initialize the entire chambre object

    this.chambre.bloc = new Bloc();
    this.chambre.typeC = TypeChambre.SIMPLE; // Initialize chambre.bloc with a new Bloc object

  }

  saveChambre() {
    this.chambreService.createChambre(this.chambre).subscribe(
      (response) => {
        console.log( response);
      },
    
    );
  }
  goToChambreList(): void {
    this.router.navigate(['/chambre']);
  }

  onSubmit(): void {
    console.log(this.chambre);
    this.saveChambre();
   this.goToChambreList()
  }
}
