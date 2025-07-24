import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentingDocService } from '../parenting-doc.service';
import { ParentingDoc } from '../parenting-doc.model';

@Component({
  selector: 'dadlife-parenting-doc-edit',
  standalone: false,
  templateUrl: './parenting-doc-edit.component.html',
  styleUrl: './parenting-doc-edit.component.css'
})
export class ParentingDocEditComponent {
  constructor(private docService: ParentingDocService) {}

  onSubmit(form: NgForm) {
  if (!form.valid) return;

  const newDoc = new ParentingDoc(
    Math.random().toString(), // ID temporal
    form.value.title,
    form.value.description,
    form.value.url
  );

  this.docService.addParentingDoc(newDoc).subscribe({
    next: (response) => {
      console.log('Consejo guardado correctamente:', response);
      form.reset();
    },
    error: (err) => {
      console.error('Error al guardar el consejo:', err);
    }
  });
}}