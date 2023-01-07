import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {
  private url = 'https://discord.com/api/guilds/681641606398607401/widget.json';
  constructor(private httpClient: HttpClient) { }

  getOnline(){
    return this.httpClient.get(this.url);
  }

}
