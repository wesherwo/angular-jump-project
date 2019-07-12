import { Component, OnInit} from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor() {}

  backgroundImages = ["https://rocketleague.media.zestyio.com/rl_gameplay_june-2018_23_1080.f44ca8609585ba611e1277fc600f5cc1.jpg",
                      "https://rocketleague.media.zestyio.com/IMG_1355.f44ca8609585ba611e1277fc600f5cc1.JPG",
                      "https://static.playoverwatch.com/media/wallpaper/lineup-standard.jpg"
                      ];
  background = 0;
  timeToWait = 3;
  timerObj = timer(1000 * this.timeToWait, 2000 * this.timeToWait);
  
  ngOnInit() {
    this.timerObj.subscribe(val => this.carousel());
  }

  carousel(){
    this.background = (this.background + 1) % this.backgroundImages.length;
  }

}
