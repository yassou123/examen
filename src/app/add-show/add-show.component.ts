import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Show } from '../models/Show';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent {

  constructor(private Act: ActivatedRoute, private showS: ShowService,) { }
  id!: number;
  show!: Show;
  showId: number = 20;
  FormAddShow = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required,]),
    location: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*')]),
  })


  addShow() {
    this.id = this.Act.snapshot.params['id'];
    this.show = new Show(this.showId + this.id, this.FormAddShow.value.title!, this.FormAddShow.value.date!, this.FormAddShow.value.location!, this.id);
    this.showS.addShow(this.show).subscribe(
      () => console.log("aaaaaaaaaa"),
    );
  }
}
