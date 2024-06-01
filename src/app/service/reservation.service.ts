import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private client: HttpClient) { }


  reservePlace(reservation: Reservation): Observable<Reservation> {
    return this.client.post<Reservation>("http://localhost:3000/Reservation", reservation);
  }

  getReservationList() {
    return this.client.get<Reservation[]>("http://localhost:3000/Reservation");

  }
}
