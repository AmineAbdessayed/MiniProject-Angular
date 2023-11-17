import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from './Entities/chambre';
import { Reservation } from './Entities/reservation';

@Injectable({
  providedIn: 'root'
})
export class ServiceChambreService {
  private chambreBaseUrl = 'http://localhost:8081/chambre';
  private reservationBaseUrl = 'http://localhost:8081/reservation';

  constructor(private httpClient: HttpClient) {}

  getChambreList(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]>(`${this.chambreBaseUrl}/findAll`);
  }

  createChambre(chambre: Chambre): Observable<Chambre> {
    return this.httpClient.post<Chambre>(`${this.chambreBaseUrl}/ajouter`, chambre);
  }

  deleteChambre(chambre: Chambre): Observable<void> {
    const url = `${this.chambreBaseUrl}/delete/${chambre.idChambre}`;
    return this.httpClient.delete<void>(url);
  }

  getReservationsByChambre(idChambre: number): Observable<Reservation[]> {
    const url = `${this.reservationBaseUrl}/reservations/${idChambre}`;
    return this.httpClient.get<Reservation[]>(url);
  }
}