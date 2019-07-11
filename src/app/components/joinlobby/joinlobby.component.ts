import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinlobby',
  templateUrl: './joinlobby.component.html',
  styleUrls: ['./joinlobby.component.css']
})
export class JoinlobbyComponent {

  constructor(private chatService: ChatService, private router: Router) { }
  joinText: string;

  joinLobby() {
    this.chatService.joinChannel(this.joinText);
    this.router.navigate(['/ytlobby']);
  }
}
