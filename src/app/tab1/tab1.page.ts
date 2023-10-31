import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  tweets: any = [];
  segment = 'home';

  constructor(private http: HttpClient, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.http
      .get(
        'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json'
      )
      .subscribe((data: any) => {
        console.log('tweets:', data.tweets);
        this.tweets = data.tweets;
      });
  }
}
