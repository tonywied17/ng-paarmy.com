import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private url = 'https://api.tonewebdesign.com/pa/maps';
   
  constructor(private httpClient: HttpClient) { }
  
  getMaps(){
    return this.httpClient.get(this.url);
  }

}
