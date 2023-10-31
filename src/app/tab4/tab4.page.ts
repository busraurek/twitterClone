import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public data = ['Şebnem Ferah'];
  public results = [...this.data];
  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  constructor() {}

  ngOnInit() {}
}
