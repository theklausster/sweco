import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.sass'
  ],
  templateUrl: './app.component.pug'
})

export class AppComponent {

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
  }

}

