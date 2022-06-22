import { Component } from '@angular/core';
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vk-bot-portal';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    const mb = document.getElementById('messageBox') as HTMLInputElement;
    this.chatService.sendMessage('Titherin', mb.value).subscribe();
    mb.value = '';
  }
}
