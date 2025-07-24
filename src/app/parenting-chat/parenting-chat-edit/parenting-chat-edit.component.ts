import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentingChatService } from '../parenting-chat.service';
import { ParentingChat } from '../parenting-chat.model';

@Component({
  selector: 'dadlife-parenting-chat-edit',
  standalone: false,
  templateUrl: './parenting-chat-edit.component.html',
  styleUrl: './parenting-chat-edit.component.css'
})

export class ParentingChatEditComponent {
  constructor(private chatService: ParentingChatService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const newChat = new ParentingChat(
      new Date().getTime().toString(),
      form.value.topic,
      form.value.message,
      form.value.sender
    );

    this.chatService.addChat(newChat).subscribe(() => {
      form.resetForm();
    });
  }
}
