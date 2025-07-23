import { Injectable } from '@angular/core';
import { ParentingDoc } from './parenting-doc.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParentingDocService {
  parentingDocChangedEvent = new Subject<ParentingDoc[]>();

  private parentingDocs: ParentingDoc[] = [
    new ParentingDoc('1', 'Cómo calmar a un bebé que llora', 'Consejos prácticos para padres primerizos.', 'https://padres-bebes.com/calma'),
    new ParentingDoc('2', 'Rutinas de sueño para bebés', 'Guía sobre horarios y técnicas para mejorar el sueño.', 'https://padres-bebes.com/sueno')
  ];

  getParentingDocs(): ParentingDoc[] {
    return this.parentingDocs.slice(); // copia
  }

  getParentingDoc(id: string): ParentingDoc | undefined {
    return this.parentingDocs.find(doc => doc.id === id);
  }

  addParentingDoc(newDoc: ParentingDoc) {
    this.parentingDocs.push(newDoc);
    this.parentingDocChangedEvent.next(this.getParentingDocs());
  }
}


