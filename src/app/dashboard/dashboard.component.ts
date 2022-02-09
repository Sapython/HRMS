import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data.provider';
import { AuthService } from '../services/auth.service';
import { UsersInfoService } from '../services/users-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/Dashboard/Home', icon: 'home', accessLevel:0},
    { title: 'Leave', url: '/Dashboard/Leave', icon: 'accessibility', accessLevel:1},
    { title: 'Biometrics', url: '/Dashboard/Biometrics', icon: 'finger-print', accessLevel:1 },
    { title: 'Time Sheet', url: '/Dashboard/Timesheet', icon: 'archive', accessLevel:0 },
    { title: 'Holiday Calendar', url: '/Dashboard/Calendar', icon: 'calendar', accessLevel:0 },
    { title: 'Payroll', url: '/Dashboard/Payroll', icon: 'cash', accessLevel:1 },
    { title: 'Settings', url: '/Dashboard/Settings', icon: 'cog', accessLevel:1 },
    { title: 'All Users', url: '/Dashboard/Users', icon:'people', accessLevel:2 }
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
  userAccessLevel=-1;
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
  
  constructor(public authService:AuthService,public dataProvider:DataProvider,public usersInfoService:UsersInfoService) { 
    this.dataProvider.showOverlay=true;
    console.log(this.authService.userId);
    this.usersInfoService.getCurrentUserData().subscribe((value)=>{
      this.userAccessLevel=-1;
      this.dataProvider.accessLevel=-1;
      console.log(value.access.accessLevel)
      if (value.access.accessLevel=='Admin'){
        this.userAccessLevel=2;
        this.dataProvider.accessLevel=2;
      }else if (value.access.accessLevel=="Manager"){
        this.userAccessLevel=1;
        this.dataProvider.accessLevel=1;
      } else if (value.access.accessLevel=='Employee'){
        this.userAccessLevel=0;
        this.dataProvider.accessLevel=0;
      }
      console.log(this.userAccessLevel);
      // this.userAccessLevel=;
      this.dataProvider.showOverlay=false;
    })
  }
  openNotification(title,date,body,tags){
    var card = document.getElementById("hiddenInfoCard") as HTMLElement;
    card.style.right="-10px";
  }
  closeNotification(){
    var card = document.getElementById("hiddenInfoCard") as HTMLElement;
    card.style.right="-60vw";
  }
  ngOnInit() {
  }

}
