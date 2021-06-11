import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddReminderOrEventPage } from '../modals/add-reminder-or-event/add-reminder-or-event.page';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.scss'],
})

export class HolidayCalendarComponent implements OnInit {
  monthNo: number;
  year: number;

  constructor(private modalController: ModalController) { }

  getMonthName() : string {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][this.monthNo];
  }

  updateCalendar() {
    //  calculating the number of days in the chosen month
    let monthDays: number = 0;
    if ([0, 2, 4, 6, 7, 9, 11].includes(this.monthNo)) {
      monthDays = 31;
    }
    else if ([3, 5, 8, 10].includes(this.monthNo)) {
      monthDays = 30;
    }
    else if (this.year % 400 == 0 || (this.year % 4 == 0 && this.year % 100 != 0)) {
      monthDays = 29;
    }
    else {
      monthDays = 28;
    }

    //  Updating cells, starting from 1st of the month
    let cells = document.getElementsByTagName('ion-col');
    let dayOnFirst = new Date(this.year, this.monthNo, 1).getDay();    
    let index = dayOnFirst + 7; //exclude first row of days

    //  First, clearing all the cells excepts for the days' row
    for (let i = cells.length - 1; i >= 7; i--) {
      cells[i].classList.remove('day');
      cells[i].innerHTML = '';
    }

    //  Finally updating them
    for (let day = 1; day <= monthDays; day++) {
      cells[index].classList.add('day');
      cells[index++].textContent = day.toString();
    }

    //  Marking today's date
    let today = new Date();
    if (this.monthNo == today.getMonth() && this.year == today.getFullYear()) {
      let todayCell = cells[dayOnFirst + today.getDate() + 6];
      todayCell.innerHTML = '<b>' + todayCell.innerHTML + '</b>'
    }
  }

  async addReminder(e: Event) {
    let el = e.target as HTMLElement;
    if (el.classList.contains('day')) {
      //  open modal
      const modal = await this.modalController.create({
        component: AddReminderOrEventPage,
        componentProps: {
          "date": el.textContent,
          "month": this.getMonthName(),
          "year": this.year
        }
      });
      
      return await modal.present();
    }
  }

  ngOnInit() {
    let today = new Date();
    this.monthNo = today.getMonth();
    this.year = today.getFullYear();
    this.updateCalendar();

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    prev.addEventListener('click', () => {
      if (this.monthNo == 0) {
        this.monthNo = 11;
        this.year--;
      }
      else {
        this.monthNo--;
      }
      this.updateCalendar();
    }, false);

    next.addEventListener('click', () => {
      if (this.monthNo == 11) {
        this.monthNo = 0;
        this.year++;
      }
      else {
        this.monthNo++;
      }
      this.updateCalendar();
    }, false);
  }
}
