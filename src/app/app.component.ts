import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MenuController } from '@ionic/angular';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }
}
