import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../models/Show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  constructor(private client: HttpClient) { }

  addShow(show: Show): Observable<Show> {

    return this.client.post<Show>("http://localhost:3000/show", show);

  }

  getShowList() {
    return this.client.get<Show[]>("http://localhost:3000/show");
  }
}