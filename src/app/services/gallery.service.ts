import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private url = 'https://api.tonewebdesign.com/pa/gallery';
   
  constructor(private httpClient: HttpClient) { }
  
  getGallery(){
    return this.httpClient.get(this.url);
  }
}
