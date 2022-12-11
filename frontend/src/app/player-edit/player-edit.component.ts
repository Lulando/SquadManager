import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { player, fetchedPlayer } from '../types/player';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss'],
})
export class PlayerEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpServiceService,
    private router: Router
  ) {}

  id!: string;
  editedPlayer!: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.http.getPlayer(this.id).subscribe((player) => {
        this.editedPlayer = player;
        this.editPlayerForm.controls['fname'].setValue(this.editedPlayer.fname);
        this.editPlayerForm.controls['lname'].setValue(this.editedPlayer.lname);
        this.editPlayerForm.controls['club'].setValue(this.editedPlayer.club);
        this.editPlayerForm.controls['pos'].setValue(this.editedPlayer.pos);
      });
    });
  }

  editPlayerForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    club: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pos: new FormControl('', [Validators.required]),
  });

  editHandler(id: string, event: any) {
    event.preventDefault();
    const data = this.editPlayerForm.value;
    this.http.editPlayer(id, data).subscribe(() => {
      this.router.navigate(['/players']);
    });
  }
}
