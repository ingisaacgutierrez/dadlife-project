import { Component } from '@angular/core';
import { Professional } from './professional.model';


@Component({
  selector: 'dadlife-professionals',
  standalone: false,
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.css'
})
export class ProfessionalsComponent {
  selectedProfessional!: Professional;

  onProfessionalSelected(prof: Professional) {
    this.selectedProfessional = prof;
  }
}
