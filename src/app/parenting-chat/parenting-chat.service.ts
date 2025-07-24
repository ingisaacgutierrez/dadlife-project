import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParentingChat } from './parenting-chat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentingChatService {
  private baseUrl = 'http://localhost:3000/api/chats';

  constructor(private http: HttpClient) {}

  getChats(): Observable<ParentingChat[]> {
    return this.http.get<ParentingChat[]>(this.baseUrl);
  }

  addChat(chat: ParentingChat): Observable<ParentingChat> {
    return this.http.post<ParentingChat>(this.baseUrl, chat);
  }

  deleteChat(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

