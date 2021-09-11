import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: string[] = ['Raleigh', 'Chicago', 'Austin', 'Seattle', 'LosAngeles'];
}
