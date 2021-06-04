import { Component } from '@angular/core';
import { DataProvider } from './providers/data.provider';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/Dashboard/Home', icon: 'home' },
    { title: 'Leave', url: '/Dashboard/Leave', icon: 'accessibility' },
    { title: 'Biometrics', url: '/Dashboard/Biometrics', icon: 'finger-print' },
    { title: 'Time Sheet', url: '/Dashboard/Timesheet', icon: 'archive' },
    { title: 'Holiday Calendar', url: '/Dashboard/Calendar', icon: 'calendar' },
    { title: 'Payroll', url: '/Dashboard/Payroll', icon: 'cash' },
    { title: 'Settings', url: '/Dashboard/Settings', icon: 'cog' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public dataProvider:DataProvider,public authService:AuthService) {}
}
