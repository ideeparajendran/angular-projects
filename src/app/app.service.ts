import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL =
    'https://api.weatherbit.io/v2.0/forecast/daily?city=LosAngeles &key=371d4e84f04f4e6eafe38174f3de11e5&days=5';
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get(this.URL);
   
  }
}
