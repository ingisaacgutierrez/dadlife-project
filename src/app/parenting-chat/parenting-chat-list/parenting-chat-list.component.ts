import { Component } from '@angular/core';
import { ParentingChat } from '../parenting-chat.model';


@Component({
  selector: 'dadlife-parenting-chat-list',
  standalone: false,
  templateUrl: './parenting-chat-list.component.html',
  styleUrl: './parenting-chat-list.component.css'
})
export class ParentingChatListComponent {
  chats: ParentingChat[] = [
    new ParentingChat('1', 'Pataletas', '¿Cómo manejan las rabietas de sus hijos?', 'Carlos'),
    new ParentingChat('2', 'Hora de dormir', 'Consejos para establecer una rutina nocturna efectiva', 'Luis')
  ];

  onChatAdded(newChat: ParentingChat) {
  this.chats.push(newChat);
}

}

