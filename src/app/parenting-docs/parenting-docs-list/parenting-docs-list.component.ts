import { Component, OnInit } from '@angular/core';
import { ParentingDoc } from '../parenting-doc.model';
import { ParentingDocService } from '../parenting-doc.service';

@Component({
  selector: 'dadlife-parenting-docs-list',
  standalone: false,
  templateUrl: './parenting-docs-list.component.html',
  styleUrl: './parenting-docs-list.component.css'
})
export class ParentingDocListComponent implements OnInit {
  parentingDocs: ParentingDoc[] = [];

  constructor(private docService: ParentingDocService) {}

  ngOnInit(): void {
   this.docService.getParentingDocs().subscribe((docs: ParentingDoc[]) => {
  this.parentingDocs = docs;
});
}
}
