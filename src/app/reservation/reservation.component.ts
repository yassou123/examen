import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../models/Reservation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  constructor(private reservationService: ReservationService, private act: ActivatedRoute) { }
  id: number = 20;
  showId!: number;
  reservation!: Reservation
  FormAddShow = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    seats: new FormControl('', [Validators.required, Validators.max(10)]),
  })

  reserve() {
    this.showId = this.act.snapshot.params['id'];
    this.reservation = new Reservation(this.id, this.showId, this.FormAddShow.value.name!, Number.parseInt(this.FormAddShow.value.seats!))
    this.reservationService.reservePlace(this.reservation).subscribe(
      () => console.log("aaaaaaaaaa"),
    );
  }

}
