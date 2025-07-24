import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentingChat } from './parenting-chat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentingChatService {
  private apiUrl = 'http://localhost:3000/api/parenting-chats';

  constructor(private http: HttpClient) {}

  getChats(): Observable<ParentingChat[]> {
    return this.http.get<ParentingChat[]>(this.apiUrl);
  }

  addChat(chat: ParentingChat): Observable<ParentingChat> {
    return this.http.post<ParentingChat>(this.apiUrl, chat);
  }

  updateChat(id: string, chat: ParentingChat): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, chat);
  }

  deleteChat(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


