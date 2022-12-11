import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {
  constructor(private http: HttpServiceService) {}

  ngOnInit() {}

  playerform: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    club: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pos: new FormControl('', [Validators.required]),
  });

  onSubmit(event: any) {
    event.preventDefault();
    // validation
    this.http.createPlayer(this.playerform.value).subscribe((data) => {
      this.playerform.reset();
    });
  }
}
