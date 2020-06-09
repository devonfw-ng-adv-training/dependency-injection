import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string;
  date = new Date();

  constructor(@Inject('APP_TITLE') title: string) {
    this.title = title;
  }
}
