import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-reminder-or-event',
  templateUrl: './add-reminder-or-event.page.html',
  styleUrls: ['./add-reminder-or-event.page.scss'],
})
export class AddReminderOrEventPage implements OnInit {
  constructor(private modalController : ModalController, private navParams : NavParams) { }

  date; month; year;

  ngOnInit() {
    this.date = this.navParams.data.date;
    this.month = this.navParams.data.month;
    this.year = this.navParams.data.year;
  }

  async add() {
    //  Backend code for adding reminders HERE

    //  Close the modal
    await this.modalController.dismiss();
  }

}
