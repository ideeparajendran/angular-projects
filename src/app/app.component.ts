import { Component } from '@angular/core';
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
  icon: string;
  data: string;
  errorText: string;
  dataList: any[];
  imageAlt: string = 'Unable to load';
  constructor(private appService: AppService, private datePipe: DatePipe) {}

  onOptionsSelected(value: string) {
    this.appService.fetchData(value).subscribe(
      res => {
        this.data = res['data'];
        this.dataList = [];
        for (var item of this.data) {
          let dataObject: any = {};
          var transformedDate = this.datePipe
            .transform(item['datetime'],'EEEE, MMM d, y')
            .split(',');
          [dataObject.day, dataObject.date] = transformedDate;
          dataObject.temperature = item['temp'] + '°C';
          dataObject.imageSrc = '/icons/' + item['weather']['icon'] + '.png';
          this.dataList.push(dataObject);
        }
      },
      error => {
        this.errorText = 'Forecast details are not available at the moment';
      }
    );
  }
}
