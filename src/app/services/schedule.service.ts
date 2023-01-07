import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eu } from '../models/eu.model';
import { Us } from '../models/us.model';

@Injectable({
  providedIn: 'root'
})



export class ScheduleService {

  

  private eu = 'https://api.tonewebdesign.com/pa/eu';

  private us = 'https://api.tonewebdesign.com/pa/us';

  constructor(private httpClient: HttpClient) { }

  getEu(){
    return this.httpClient.get(this.eu);
  }

  getUs(){
    return this.httpClient.get(this.us);
  }

  euByDay(day: any): Observable<Eu> {
    return this.httpClient.get<Eu>(`${this.eu}/${day}`);
  }

  usByDay(day: any): Observable<Us> {
    return this.httpClient.get<Us>(`${this.us}/${day}`);
  }

}



