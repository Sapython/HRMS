import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReminderOrEventPageRoutingModule } from './add-reminder-or-event-routing.module';

import { AddReminderOrEventPage } from './add-reminder-or-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReminderOrEventPageRoutingModule
  ],
  declarations: [AddReminderOrEventPage]
})
export class AddReminderOrEventPageModule {}
