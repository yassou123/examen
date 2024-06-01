import { Component } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { Artist } from '../models/Artist';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent {



  constructor(private aService: ArtistService) { }
  listArtist!: Artist[]
  ngOnInit() {
    this.aService.getArtists().subscribe(
      (data) => this.listArtist = data,
    );
  }

}
