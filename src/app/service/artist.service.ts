import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private client: HttpClient) { }

  getArtists() {
    return this.client.get<Artist[]>("http://localhost:3000/artist");
  }

}
