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
export class YtlobbyComponent implements OnInit {

  constructor(private youtube: YoutubeSearchService, private el: ElementRef, private chatService: ChatService) { }
  player: YT.Player;
  id: string = '';
  chat = [];
  vidQueue = [];
  chatText: string;
  searchText: string;
  lobby: Number = 0;

  ngOnInit() {
    this.chatService.getLobby()
      .subscribe((message) => {
        this.lobby = message
      });
    this.chatService.getMessages()
      .subscribe((message: string) => {
        this.chat.push(message);
      });
    this.chatService.getVideos()
      .subscribe((message: string) => {
        this.id = message;
        this.player.loadVideoById(this.id);
      });
    this.chatService.playVideos()
      .subscribe((message: string) => {
        this.playVideo();
      });
    this.chatService.pauseVideos()
      .subscribe((message: string) => {
        this.pauseVideo();
      });
  }

  playSong() {
    this.youtube.search(this.searchText).subscribe(
      _results => {
        this.chatService.sendVideo(_results[0].id);
      }, err => { console.log(err); });
    this.searchText = '';
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log(event.data);
    if (event.data == 1) {
      this.chatService.playVideo("play");
    }
    if (event.data == 2) {
      this.chatService.pauseVideo("pause");
    }
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
