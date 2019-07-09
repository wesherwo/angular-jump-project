import { Component, ElementRef, OnInit } from '@angular/core';
import { YoutubeSearchService } from 'src/app/services/youtube-search.service';
import { NgModule } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ChatService } from 'src/app/services/chat.service';

@NgModule({
  imports: [NgxYoutubePlayerModule.forRoot()],
})

@Component({
  selector: 'app-ytlobby',
  templateUrl: './ytlobby.component.html',
  styleUrls: ['./ytlobby.component.css']
})
export class YtlobbyComponent  implements OnInit {

  constructor(private youtube: YoutubeSearchService, private el: ElementRef, private chatService: ChatService) { }
  title = 'music';
  player: YT.Player;
  id:string = '';
  chat=[];
  vidQueue=[];
  chatText:string;
  searchText:string;

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.chat.push(message);
      });
      this.chatService
      .getVideos()
      .subscribe((message: string) => {
        this.id = message;
        this.player.loadVideoById(this.id);
      });
  }

  playSong(){
      this.youtube.search(this.searchText).subscribe(
        _results => {
          this.chatService.sendVideo(_results[0].id);
        },
        err => {
          console.log(err);
        }
      );
      this.searchText = '';
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  sendMessage() {
    this.chatService.sendMessage(this.chatText);
    this.chatText = '';
  }
}
