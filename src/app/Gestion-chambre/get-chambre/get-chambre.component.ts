// get-chimport 'chart.js/auto';
import {  LinearScale, CategoryScale } from 'chart.js';

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceChambreService } from 'src/app/service-chambre.service';
import { Chambre } from 'src/app/Models/chambre';
import { Reservation } from 'src/app/Models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

declare var Chart: any;

@Component({
  selector: 'app-get-chambre',
  templateUrl: './get-chambre.component.html',
  styleUrls: ['./get-chambre.component.css']
})
export class GetChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  reservations: Reservation[] = [];
  selectedChambre: Chambre | null = null;
  searchNumeroChambre: number | undefined;
  searchTypeC: string | undefined;



  constructor(
    private chambreService: ServiceChambreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
        this.chambres = this.chambres.filter(c => c.idChambre !== chambre.idChambre);
      },
      error => {
        console.error('Failed to delete chambre:', error);
      }
    );
  }

  getReservations(chambreId: number): void {
    const chambre = this.chambres.find(c => c.idChambre === chambreId);
    if (chambre) {
      this.selectedChambre = chambre;
      this.chambreService.getReservationsByChambre(chambreId).subscribe(reservations => {
        chambre.reservations = reservations;
      });
    }
  }

  updateChambre(chambreId: number): void {
    // Navigate to the update component with the selected Chambre ID
    this.router.navigate(['/update', chambreId]);
  }

  searchChambres(): void {
    this.chambreService
      .searchChambres(this.searchNumeroChambre, this.searchTypeC)
      .subscribe(chambres => (this.chambres = chambres));
  }
  resetSearch(): void {
    this.searchNumeroChambre = undefined;
    this.searchTypeC = undefined;
    this.getChambres();
  }

  GoToStatistique(){
    this.router.navigate(['/detail']);


  }

  GoToaddChambre(){
    this.router.navigate(['/addChambre']);


  }

  



  
}


