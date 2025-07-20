import { Component, OnInit } from '@angular/core';
import { Professional } from '../professional.model';

@Component({
  selector: 'dadlife-professional-list',
  standalone: false,
  templateUrl: './professional-list.component.html',
  styleUrl: './professional-list.component.css'
})
export class ProfessionalListComponent implements OnInit {
  professionals: Professional[] = [];

  constructor() {}

  ngOnInit() {
    this.professionals = [
      new Professional(
        '1',
        'Dr. Carolina Ruiz',
        'cruiz@example.com',
        '0999999999',
        '../../assets/images/pediatrician1.jpg',
        'Pediatra',
        null
      ),
      new Professional(
        '2',
        'Lic. Jorge Ortega',
        'jortega@example.com',
        '0988888888',
        '../../assets/images/sleepcoach1.jpg',
        'Coach de Sueño Infantil',
        null
      )
    ];
  }
}
