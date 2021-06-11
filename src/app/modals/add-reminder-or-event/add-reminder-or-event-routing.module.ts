import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReminderOrEventPage } from './add-reminder-or-event.page';

const routes: Routes = [
  {
    path: '',
    component: AddReminderOrEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReminderOrEventPageRoutingModule {}
