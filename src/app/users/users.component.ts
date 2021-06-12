import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersInfoService } from '../services/users-info.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  constructor(public authService:AuthService,public users_info_service: UsersInfoService) { }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  users=[];
  managers=[];
  admins=[];
  employees=[];
  unregistered=[];
  totalAdmins:number=0;
  totalManagers:number=0;
  totalEmployees:number=0;
  totalUnregistered:number=0;
  ngOnInit() {
    this.authService.isUserAdmin()
    this.users_info_service.getAllUsers().subscribe((value)=>{
      this.totalAdmins=0;
      this.totalEmployees=0;
      this.totalManagers=0;
      this.totalUnregistered=0;
      this.users=[];
      this.admins=[];
      this.managers=[];
      this.unregistered=[];
      for(let data in value){
        var dt=value[data];
        if (dt.access.accessLevel=="Admin"){
          this.totalAdmins+=1
          this.admins.push({"name":dt.displayName,"email":dt.email,"photo":dt.photoURL})
        }else if (dt.access.accessLevel=="Manager"){
          this.totalManagers+=1
          this.managers.push({"name":dt.displayName,"email":dt.email,"photo":dt.photoURL})
        }else if (dt.access.accessLevel=="Employee"){
          this.totalEmployees+=1
          this.employees.push({"name":dt.displayName,"email":dt.email,"photo":dt.photoURL,"post":dt.post,"firstLogin":dt.firstLogin,"teams":dt.access.teamAccess})
        }else if (dt.access.accessLevel=="Unregistered"){
          this.totalUnregistered+=1
          this.unregistered.push({"name":dt.displayName,"email":dt.email,"photo":dt.photoURL})
        }
        // console.log(value[data].displayName);
        console.log(this.admins);
        console.log(this.totalAdmins)
        console.log(this.employees)
        console.log(this.totalEmployees)
        console.log(this.managers)
        console.log(this.totalManagers)
      }
    })
  }
}
