import { Injectable } from '@angular/core';
import { ParentingDoc } from './parenting-doc.model';

@Injectable({
  providedIn: 'root'
})
export class ParentingDocService {
  private docs: ParentingDoc[] = [
    {
      id: '1',
      title: 'Rutinas para dormir mejor',
      description: 'Consejos para establecer una rutina nocturna efectiva para tu bebé.',
      url: 'https://ejemplo.com/rutinas-dormir'
    },
    {
      id: '2',
      title: 'Alimentación saludable',
      description: 'Ideas de snacks nutritivos y fáciles de preparar.',
      url: 'https://ejemplo.com/snacks-saludables'
    }
  ];

  getParentingDocs(): ParentingDoc[] {
    return [...this.docs];
  }
}

