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
    if (!form.valid) return;

    console.log('[✅ Enviando al backend]', form.value); 

    const newChat: ParentingChat = {
      subject: form.value.subject,
      msgText: form.value.msgText,
      sender: form.value.sender,
    };

    this.chatService.addChat(newChat).subscribe({
      next: (res) => {
        console.log('✅ Mensaje guardado', res);
        form.reset();
      },
      error: (err) => {
        console.error('❌ Error al guardar', err);
      }
    });
  }
  
  
}
