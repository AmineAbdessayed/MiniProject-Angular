import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceChambreService } from '../service-chambre.service';
import { Reservation } from '../Entities/reservation';


@Component({
  selector: 'app-details-chambre',
  templateUrl: './details-chambre.component.html',
  styleUrls: ['./details-chambre.component.css']
})

export class DetailsChambreComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor( private route : ActivatedRoute ,
               private chambreserivce: ServiceChambreService){

  }
  ngOnInit(): void {
    // Retrieve reservations from the route parameters
    this.route.params.subscribe(params => {
      const chambreId = +params['id']; // Convert id to a number if needed
      // Fetch reservations from the serv ice based on chambreId
      this.chambreserivce.getReservationsByChambre(chambreId).subscribe(reservations => {
        this.reservations = reservations;
      });
    });
  }

}
