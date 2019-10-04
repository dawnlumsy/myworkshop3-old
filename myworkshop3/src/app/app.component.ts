import { Component ,} from '@angular/core';
import { RSVP } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myworkshop3';

  addToList($event) {
    console.info("RSVP list:" , $event);
  }
}
