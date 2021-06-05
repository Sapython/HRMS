import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/Dashboard/Home', icon: 'home' },
    { title: 'Leave', url: '/Dashboard/Leave', icon: 'accessibility' },
    { title: 'Biometrics', url: '/Dashboard/Biometrics', icon: 'finger-print' },
    { title: 'Time Sheet', url: '/Dashboard/Timesheet', icon: 'archive' },
    { title: 'Holiday Calendar', url: '/Dashboard/Calendar', icon: 'calendar' },
    { title: 'Payroll', url: '/Dashboard/Payroll', icon: 'cash' },
    { title: 'Settings', url: '/Dashboard/Settings', icon: 'cog' },
  ];
  public labels = ['Family', 'Friends'];
  constructor(public authService:AuthService) { }

  ngOnInit() {}

}
