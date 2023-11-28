import { Bloc } from "./bloc";
import { Reservation } from "./reservation";

export class Chambre {

   
        idChambre: number=0;
        numeroChambre: number=0;
        typeC!: TypeChambre;
        bloc!: Bloc;
        reservations!: Reservation[];
      }
      
      export enum TypeChambre {
        SIMPLE = 'SIMPLE',
        DOUBLE = 'DOUBLE',
        TRIPLE = 'TRIPLE',
        // Add more room types as needed
      }

