import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vk-bot-portal';
  members: Array<any> = [];
  bans: Array<any> = [];
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMembers().subscribe(members => {
      this.members = members;
    });
    this.chatService.getBanMembers().subscribe(members => {
      this.bans = members;
    });
  }

  sendMessage(id: any) {
    const mb = document.getElementById('messageBox') as HTMLInputElement;
    this.chatService.sendMessage(id, mb.value).subscribe();
    mb.value = '';
  }

  ban(id: any) {
    this.chatService.banMember(id).subscribe();
  }

  unban(id: any) {
    this.chatService.unbanMember(id).subscribe();
  }
}
