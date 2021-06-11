import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-reminder-or-event',
  templateUrl: './add-reminder-or-event.page.html',
  styleUrls: ['./add-reminder-or-event.page.scss'],
})
export class AddReminderOrEventPage implements OnInit {
  date : string;
  month : string;
  year : string;

  title : string;
  description : string;
  wholeDay : boolean = true;
  from : any;
  to : any;

  constructor(private modalController : ModalController, private navParams : NavParams) { }

  ngOnInit() {
    this.date = this.navParams.data.date;
    this.month = this.navParams.data.month;
    this.year = this.navParams.data.year;
     
  }

  async add() {
    if(this.isTitleValid()) {
      //  Backend code for adding reminders HERE
  
      //  Close the modal
      await this.modalController.dismiss();
    }

  }

  isTitleValid() : boolean {
    let titleInput = document.getElementById('title') as HTMLInputElement;
    if(titleInput.value == '') {
      titleInput.classList.add('error');
      return false;
    }
    else {
      titleInput.classList.remove('error');
      return true;
    }
  }
}
