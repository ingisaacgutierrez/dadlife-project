import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentingChat } from '../parenting-chat.model';

@Component({
  selector: 'dadlife-parenting-chat-edit',
  standalone: false,
  templateUrl: './parenting-chat-edit.component.html',
  styleUrl: './parenting-chat-edit.component.css'
})
export class ParentingChatEditComponent {
  @Output() chatAdded = new EventEmitter<ParentingChat>();

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const newChat = new ParentingChat(
      Math.random().toString(), // ID aleatorio temporal
      form.value.topic,
      form.value.description,
      form.value.creator
    );

    this.chatAdded.emit(newChat);
    form.reset();
  }
}
