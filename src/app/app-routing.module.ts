import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListsShowsComponent } from './lists-shows/lists-shows.component';
import { AddShowComponent } from './add-show/add-show.component';
import { Reservation } from './models/Reservation';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listArtist', component: ListArtistsComponent },
  { path: 'listShow', component: ListsShowsComponent },
  { path: 'addShow/:id', component: AddShowComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
