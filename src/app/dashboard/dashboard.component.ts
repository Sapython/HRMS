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

  searchResultsFound;
  noSearchResultFound;
  
  allResults = [
    {'name':'Dashboard', 'location':'./Home'},
    {'name':'Leave', 'location':'./Leave'},
    {'name':'Biometrics', 'location':'./Biometrics'},
    {'name':'Time Sheet', 'location':'./Timesheet'},
    {'name':'Holiday Calendar', 'location':'./Calendar'},
    {'name':'Payroll', 'location':'./Payroll'},
    {'name':'Settings', 'location':'./Settings'},
  ];

  searchResults = [];

  autocomplete() : void {
    this.searchResultsFound = false;
    this.noSearchResultFound = false;

    let search = document.getElementById('search') as HTMLIonInputElement;
    let val = search.value as string;

    if(val.trim() !== '') {
      this.searchResults = this.allResults.filter((result) => {
        return result.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });

      if(this.searchResults.length > 0) {
        this.searchResultsFound = true;
      }
      else {
        this.noSearchResultFound = true;
      }
    }
  }

  constructor(public authService:AuthService) { }

  ngOnInit() {}

}
