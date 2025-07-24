import { Component, OnInit } from '@angular/core';
import { ParentingChat } from '../parenting-chat.model';
import { ParentingChatService } from '../parenting-chat.service';


@Component({
  selector: 'dadlife-parenting-chat-list',
  standalone: false,
  templateUrl: './parenting-chat-list.component.html',
  styleUrl: './parenting-chat-list.component.css'
})
export class ParentingChatListComponent implements OnInit {
  chats: ParentingChat[] = [];

  constructor(private chatService: ParentingChatService) {}

  ngOnInit() {
    this.fetchChats();
  }

  fetchChats() {
    this.chatService.getChats().subscribe((data) => {
      this.chats = data;
    });
  }

  onDelete(id: string) {
    this.chatService.deleteChat(id).subscribe(() => {
      this.chats = this.chats.filter(chat => chat.id !== id);
    });
  }
}
