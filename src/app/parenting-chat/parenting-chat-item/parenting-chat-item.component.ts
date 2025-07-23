import { Component, Input } from '@angular/core';
import { ParentingChat } from '../parenting-chat.model';

@Component({
  selector: 'dadlife-parenting-chat-item',
  standalone: false,
  templateUrl: './parenting-chat-item.component.html',
  styleUrl: './parenting-chat-item.component.css'
})
export class ParentingChatItemComponent {
  @Input() chat!: ParentingChat;
}
