import { Component, Input } from '@angular/core';
import { ParentingDoc } from '../parenting-doc.model';

@Component({
  selector: 'dadlife-parenting-doc-item',
  standalone: false,
  templateUrl: './parenting-doc-item.component.html',
  styleUrl: './parenting-doc-item.component.css'
})
export class ParentingDocItemComponent {
  @Input() doc!: ParentingDoc;
}
