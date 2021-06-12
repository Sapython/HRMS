import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BiometricsComponent } from './biometrics/biometrics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginGuard } from './guards/login-guard.guard'
import { UsersComponent } from './users/users.component';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard/Home',
    pathMatch: 'full'
  },
  { path:"Dashboard",
    component:DashboardComponent,
    canActivate:[LoginGuard],
    data: { authGuardPipe: redirectLoggedInTo(['/Login']), "route":"checkout" },
    children:[
      {
        path: 'Home',
        component:HomeComponent,
      },
      {
        path: 'Leave',
        component:LeaveComponent,
      },
      {
        path: 'Biometrics',
        component:BiometricsComponent,
      },
      {
        path: 'Timesheet',
        component:TimeSheetComponent,
      },
      {
        path: 'Calendar',
        component:HolidayCalendarComponent,
      },
      {
        path: 'Payroll',
        component:PayrollComponent,
      },
      {
        path: 'Settings',
        component:SettingsComponent,
      },
      {
        path:'Users',
        component:UsersComponent,
      },
      {
        path:"Notifications",
        component:AllNotificationsComponent,
      }
    ]
  },
  {
    path:"Login",
    component:LoginComponent,
  },
  {
    path:"SignUp",
    component:SignupComponent,
  },
  {
    path:"verifyEmail",
    component:VerifyEmailComponent,
  },
  {
    path: 'add-reminder-or-event',
    loadChildren: () => import('./modals/add-reminder-or-event/add-reminder-or-event.module').then( m => m.AddReminderOrEventPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
