import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: string[] = ['Raleigh', 'Chicago', 'Austin', 'Seattle', 'LosAngeles'];
  date: string;
  convertedDate: string;
  day: string;
  dateop: string;
  temp: string;
  constructor(private appService: AppService, private datePipe: DatePipe) {}

  onClick() {
    this.appService.fetchData().subscribe(res => {
      console.log(res);

      this.date = res['data'][0]['datetime'];
      this.convertedDate = this.datePipe.transform(this.date, 'fullDate');

      var dateData = this.convertedDate.split(',');
      this.day = dateData[0];
      this.dateop = dateData[1];

      // temp
      this.temp = res['data'][0]['temp'] + '°C';

      //icons
      this.date = res['data'][0]['weather']['icon'];

    });
  }
}
