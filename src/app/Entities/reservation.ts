import { Chambre } from "./chambre";

export class Reservation {
    idReservation: number=0;
    anneeUniversitaire!: Date;
    estVrai!: boolean;
    chambre!: Chambre;
  }