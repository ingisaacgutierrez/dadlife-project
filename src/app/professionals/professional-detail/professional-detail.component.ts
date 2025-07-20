import { Component } from '@angular/core';
import { Professional } from '../professional.model';

@Component({
  selector: 'dadlife-professional-detail',
  standalone: false,
  templateUrl: './professional-detail.component.html',
  styleUrl: './professional-detail.component.css'
})
export class ProfessionalDetailComponent {
  professional: Professional = new Professional(
    '1',
    'Dr. Carolina Ruiz',
    'cruiz@example.com',
    '0999999999',
    '../../assets/images/pediatrician1.jpg',
    'Pediatra',
    null
  );
}
