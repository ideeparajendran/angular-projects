import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
  constructor(private http: HttpClient) {}
  fetchData(value: string) {
    let params = new HttpParams()
      .set('city', value)
      .set('key', '371d4e84f04f4e6eafe38174f3de11e5')
      .set('days', '5');
    return this.http.get(this.apiUrl, { params });
  }
}
