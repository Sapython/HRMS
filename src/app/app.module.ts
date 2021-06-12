import { AllNotificationsComponent } from './all-notifications/all-notifications.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { BiometricsComponent } from './biometrics/biometrics.component';
import { LeaveComponent } from './leave/leave.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SettingsComponent } from './settings/settings.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { NotificationComponent } from './notification/notification.component';
import { MessagesComponent } from './messages/messages.component';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { DataProvider } from './providers/data.provider';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage'
import { LoginGuard } from './guards/login-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiometricsComponent,
    LeaveComponent,
    TimeSheetComponent,
    PayrollComponent,
    SettingsComponent,
    HolidayCalendarComponent,
    NotificationComponent,
    MessagesComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    DashboardComponent,
    VerifyEmailComponent,
    UsersComponent,
    AllNotificationsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    ChartsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    ],
  providers: [
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataProvider,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
