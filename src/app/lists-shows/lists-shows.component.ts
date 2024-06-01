import { Component } from '@angular/core';
import { ShowService } from '../service/show.service';
import { Show } from '../models/Show';
import { FormControl } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-lists-shows',
  templateUrl: './lists-shows.component.html',
  styleUrls: ['./lists-shows.component.css']
})
export class ListsShowsComponent {
  title = new FormControl('');
  listPlaceReserver: number = 0;

  constructor(private showService: ShowService, private reservationService: ReservationService) { }
  showList!: Show[]
  searchedList!: Show[]
  ngOnInit() {
    this.showService.getShowList().subscribe(
      (data) => this.showList = this.searchedList = data,
    );

  }

  search() {
    this.showList = this.searchedList.filter((show: Show) => show.title.includes(this.title.value!));
    console.log(this.showList);
  }

  calculerNbrRes() {
    this.listPlaceReserver = 0
    this.reservationService.getReservationList().subscribe(
      (data) => data.forEach((value) => this.listPlaceReserver += value.seats)
    )

  }
}
