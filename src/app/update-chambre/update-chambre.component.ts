// update-chambre.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceChambreService } from '../service-chambre.service';
import { Chambre } from '../Entities/chambre';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  updateForm!: FormGroup;
  chambre: Chambre | undefined;

  constructor(
    private chambreServ: ServiceChambreService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router : Router

  ) {}

  ngOnInit(): void {
    // Get chambreId from route parameters
    const chambreId = this.route.snapshot.paramMap.get('id');

    if (chambreId) {
      this.chambreServ.getChambreById(+chambreId).subscribe(existingChambre => {
        this.chambre = existingChambre;
  
        this.updateForm = this.fb.group({
          idChambre: [this.chambre.idChambre, Validators.required],
          numeroChambre: [this.chambre.numeroChambre, Validators.required],
          typeC: [this.chambre.typeC, Validators.required],
          bloc: this.fb.group({
            idBloc: [this.chambre.bloc.idBloc, Validators.required],
          }),
          // Add other form controls as needed
        });
      });
    }
  }

  updateChambre(): void {
    if (this.updateForm.invalid) {
      // Handle invalid form
      return;
    }

    const updatedChambre: Chambre = this.updateForm.value;
    this.chambreServ.updateChambre(updatedChambre).subscribe(() => {
      console.log('Chambre updated successfully');
      this.router.navigate(['/chambre'])
      // Perform additional actions after successful update
    });
  }
}
