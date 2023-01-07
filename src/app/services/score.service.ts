import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private url = 'https://api.tonewebdesign.com/pa/score';
  constructor(private httpClient: HttpClient) { }

  getScores(){
    return this.httpClient.get(this.url);
  }

}





