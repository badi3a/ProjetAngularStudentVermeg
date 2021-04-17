import {Component, OnInit} from '@angular/core';
import {InternShip} from '../model/internShip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title: string;
  list: InternShip[];
  period: number;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'VERMEG InternShip';
    this.list = [
      {
        id: 12,
        title: 'Summer Internship - IT Support (Remote)',
        available: true,
        description: 'PRA Health Sciences is looking to place talented students in an exciting and fast paced summer internship program. With this internship, students will have the opportunity to gain invaluable exposure, hands on experience, and mentoring at a top five Clinical Research Organization.',
        period: 6
      },
      {
        id: 13,
        title: 'IT Security Internship, Summer 2021',
        available: true,
        description: 'Milliman MedInsight is one of the healthcare industry’s most highly regarded platforms for data warehousing and healthcare analytics, with a purpose of empowering easy, data-driven decision-making on important healthcare questions. ',
        period: 4
      },
      {
        id: 15,
        title: 'IT Security Internship, Summer 2021',
        available: false,
        description: 'Milliman MedInsight is one of the healthcare industry’s most highly regarded platforms for data warehousing and healthcare analytics, with a purpose of empowering easy, data-driven decision-making on important healthcare questions. ',
        period: 4
      }
    ];
  }

  applyAction(i: InternShip) {
    i.available = false;
  }

}
