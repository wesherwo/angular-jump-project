import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YtlobbyComponent } from './components/ytlobby/ytlobby.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './services/chat.service';
import { JoinlobbyComponent } from './components/joinlobby/joinlobby.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    YtlobbyComponent,
    JoinlobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
