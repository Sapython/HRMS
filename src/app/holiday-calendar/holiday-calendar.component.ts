import { AfterViewInit, Component, OnInit } from '@angular/core';
import Calendar from 'color-calendar';
@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.scss'],
})
export class HolidayCalendarComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(){
    new Calendar({
      id: '#color-calendar',
      primaryColor:"rgba(48, 162, 255,1)",
      headerBackgroundColor:"rgba(47, 54, 74,0.3)",
      dropShadow:"10px 10px 30px var(--ion-color-light)",
      calendarSize:"large",
    })
  }
  constructor() { }

  ngOnInit() {}
  month=[
    [
      {"day":""},
      {"2":""},
      {"3":""},
      {"4":""},
      {"5":""},
      {"6":""},
      {"7":""},
    ],
    [
      {"8":""},
      {"9":""},
      {"10":""},
      {"11":""},
      {"12":""},
      {"13":""},
      {"14":""},
    ],
    [
      {"15":""},
      {"16":""},
      {"17":""},
      {"18":""},
      {"19":""},
      {"20":""},
      {"21":""},
    ],
    [
      {"22":""},
      {"23":""},
      {"24":""},
      {"25":""},
      {"26":""},
      {"27":""},
      {"28":""},
    ],
    [
      {"29":""},
      {"30":""},
    ]
  ];

}
