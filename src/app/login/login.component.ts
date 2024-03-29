import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService,public dataProvider:DataProvider) { }

  ngOnInit() {
  }

}
