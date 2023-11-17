import { Component, OnInit } from '@angular/core';
import { ServiceChambreService } from '../service-chambre.service';
import { Chambre } from '../Entities/chambre';
import { Reservation } from '../Entities/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-chambre',
  templateUrl: './get-chambre.component.html',
  styleUrls: ['./get-chambre.component.css']
})
export class GetChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  reservations: Reservation[] = [];
  selectedChambre: Chambre | null = null;  // Add a property to hold the selected chambre


  constructor(private chambreService: ServiceChambreService ,
              private router : Router ,
               private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getChambres();
  }

  private getChambres(): void {
    this.chambreService.getChambreList().subscribe(data => {
      this.chambres = data;
    });
  }

  deleteChambre(chambre: Chambre): void {
    this.chambreService.deleteChambre(chambre).subscribe(
      () => {
        console.log('Chambre deleted successfully.');
        // Remove the deleted chambre from the chambres array
        this.chambres = this.chambres.filter(c => c.idChambre !== chambre.idChambre);
      },
      error => {
        console.error('Failed to delete chambre:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }
  getReservations(chambreId: number): void {
    console.log('chambreId:', chambreId);
    const chambre = this.chambres.find(c => c.idChambre === chambreId);
    console.log('chambre:', chambre);
    if (chambre) {
      this.selectedChambre = chambre;  // Set the selected chambre property
      this.chambreService.getReservationsByChambre(chambreId).subscribe(reservations => {
        chambre.reservations = reservations;
      });
    }
  }


}