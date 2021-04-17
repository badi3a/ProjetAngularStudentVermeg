import {Component, OnInit} from '@angular/core';
import {InternShip} from '../model/internShip';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.css']
})
export class FavoritComponent implements OnInit {
  list: InternShip[];

  constructor() {
  }

  ngOnInit(): void {
    this.list = [
      {
        id: 12,
        title: 'Summer Internship - IT Support (Remote)',
        available: true,
        description: 'PRA Health Sciences is looking to place talented students in an exciting and fast paced summer internship program. With this internship, students will have the opportunity to gain invaluable exposure, hands on experience, and mentoring at a top five Clinical Research Organization.',
        period: 6
      }];
  }


}
