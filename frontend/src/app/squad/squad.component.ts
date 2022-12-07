import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss'],
})
export class SquadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  formations: any[] = [
    {
      def: 4,
      md: 4,
      st: 2,
    },
    {
      def: 4,
      md: 3,
      st: 3,
    },
    {
      def: 3,
      md: 5,
      st: 2,
    },
  ];
  formInd: number = 0;
  formation: any = this.formations[this.formInd];

  changeFormation(event: any): void {
    this.formInd = event.target.value;
    this.formation = this.formations[event.target.value];
  }

  numSeq(n: number): Array<number> {
    return Array(n);
  }
}
