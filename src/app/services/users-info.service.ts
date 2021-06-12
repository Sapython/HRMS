import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {
  analytics:Observable<any>;
  currentUserData:Observable<any>;
  constructor(public afs: AngularFirestore,public authService:AuthService) {
    this.analytics=this.afs.collection<any>('users').valueChanges();
    this.currentUserData=this.afs.collection<any>("users").doc(this.authService.userId).valueChanges();
  }
  getCurrentUserData(){
    return this.currentUserData
  }
  getAllUsers(){
    return this.analytics;
  }

}
