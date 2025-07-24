import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentingDoc } from './parenting-doc.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentingDocService {
  private apiUrl = 'http://localhost:3000/api/parenting-docs';

  parentingDocChangedEvent = new Subject<ParentingDoc[]>();

  constructor(private http: HttpClient) {}

  getParentingDocs(): Observable<ParentingDoc[]> {
    return this.http.get<ParentingDoc[]>(this.apiUrl);
  }

  addParentingDoc(doc: ParentingDoc): Observable<ParentingDoc> {
    return this.http.post<ParentingDoc>(this.apiUrl, doc);
  }

  updateParentingDoc(id: string, doc: ParentingDoc): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, doc);
  }

  deleteParentingDoc(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}




