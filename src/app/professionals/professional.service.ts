import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professional } from './professional.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private apiUrl = 'http://localhost:3000/api/professionals';

  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.apiUrl);
  }

  addProfessional(prof: Professional): Observable<Professional> {
    return this.http.post<Professional>(this.apiUrl, prof);
  }

  updateProfessional(id: string, prof: Professional): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, prof);
  }

  deleteProfessional(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

