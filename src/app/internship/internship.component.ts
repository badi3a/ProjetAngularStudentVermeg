import {Component, Input, OnInit, Output} from '@angular/core';
import {InternShip} from '../model/internShip';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  @Input() intenShip: InternShip;
  constructor() {
  }

  ngOnInit(): void {
  }

  getOption(i: InternShip, p: number) {
    if (i.period <= p) {
      return true;
    } else {
      return false;
    }
  }

  getColor(i: InternShip) {
    if (i.available === true) {
      return 'green';
    } else {
      return 'red';
    }
  }

  sendNotifParent(){

  }

}
