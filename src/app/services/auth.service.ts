

import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavigationExtras, Router } from "@angular/router";
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { DataProvider } from '../providers/data.provider';
import { User, access } from './DataStructures';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { auditTime, filter, finalize, last, switchMap, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  previousTotalUsers:number=0;
  userFireData:Observable<any>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private homeDataProvider: DataProvider,
    public toastController: ToastController,
    private storage: AngularFireStorage,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        // alert("This is data user "+JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }
  public static dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
  uploadFile(file,userName) {
    const filePath =userName.toString()+"."+file.name.split('.').pop().toString();
    console.log("Starting file upload",filePath)
    const fileRef = this.storage.ref(filePath); 
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    return task.snapshotChanges().pipe(
      last(),
      switchMap(() => fileRef.getDownloadURL())
    )
  }
  userFireDataReturn(){
    return this.userFireData;
  };
  async presentToast(message,duration?) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  SignIn(email:string, password:string) {
    this.homeDataProvider.showOverlay=true;
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result:any) => {
        console.log(result)
        this.ngZone.run(() => {
          this.presentToast("Sign In successful")
          this.homeDataProvider.showOverlay=false;
        });
        this.router.navigate([""]);
      }).catch((error:any) => {
        this.presentToast("An error occured "+error.toString(),5000)
      })
  }
  // Sign up with email/password
  SignUp(email:string, password:string,name:string,photo:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (result:any) => {
        console.log("Starting email verification")
        this.SendVerificationMail();
        this.presentToast("Completing your registration");
        console.log("Download URl",this.downloadURL);
        console.log("Starting file upload ")
        this.uploadFile(photo,result.user.uid).subscribe((imageUrl)=>{
          console.log("Completed the imageurl ",imageUrl)
          this.SetUserData(result.user,name,imageUrl);
          let today = new Date();
          var currentAccess:access={
            accessLevel:'Unregistered',
          }
          localStorage.setItem("localItem",JSON.stringify({
            uid:result.user.uid,
            email: result.user.email,
            displayName:name,
            photoURL: imageUrl,
            emailVerified: result.user.emailVerified,
            isAdmin:false,
            firstLogin:today.toLocaleDateString("en-US",AuthService.dateOptions).toString(),
            data:result.user.data || [],
            post:"Unregistered",
            presentToday:this.formatPresentToday(true),
            access:currentAccess,
          }))
          console.log("Completed the setUser data")
          this.router.navigate(['']);
        })
      }).catch((error:any) => {
        this.presentToast(error.message);
        console.log(error.message)
      })
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => {
      if (u!=null){
        u.sendEmailVerification();
      }else {
        console.error("An error occured");
      }
    })
    .then(() => {
      this.presentToast("Verification email sent to your email.");
      this.homeDataProvider.verifyEmail=true;
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail:any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.presentToast('Password reset email sent, check your inbox.');
    }).catch((error) => {
      this.presentToast(error)
    })
  }
  get isEmailVerified(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.emailVerified;
  }
  get userId():string{
    let a = JSON.parse(localStorage.getItem('user') || '{}').uid;
    this.afAuth.currentUser.finally().then((value)=>{a=value})
    return a;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  get isJustLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.email!== undefined) ? true : false;
  }
  isUserAdmin(){
    console.log("IS admin fired",this.userId)
    this.afs.collection("users").doc(this.userData.uid).valueChanges().toPromise().then(
      (value)=>{
        console.log(value)
        console.log("--")
      }
    )
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  getUserData() {
    return JSON.parse(localStorage.getItem('user') || '{}')
  }

  getUserEmail(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.email !== false) ? user.email : "";
  }

  getUserName(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    let username = (user !== null && user.displayName !== "") ? user.displayName : "Anonymous";
    if ((username==null || username=="" || username==undefined) && localStorage.getItem('localItem')!=null){
      username=JSON.parse(localStorage.getItem('localItem'))["displayName"]
    }
    return username
  }

  getUserPhoto(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    let photo = (user !== null && user.photoURL !== "") ? user.photoURL : "";
    if ((photo=="" || photo==null || photo==undefined )&& localStorage.getItem('localItem')!=null){
      photo = JSON.parse(localStorage.getItem('localItem'))['photoURL']
    }
    return photo
  }

  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result:any) => {
      this.SetUserData(result.user);
      // window.alert("Auhtorisation successful ");
      this.presentToast("Auhtorisation Successful")
      this.router.navigate[""]
    }).catch((error:any) => {
      this.presentToast(error);
    })
  }
  
  formatPresentToday(val:boolean):string{
    if (val){
      let today  = new Date();
      return "1-"+(today.toLocaleDateString("en-US",AuthService.dateOptions).toString())
    }else{
      let today  = new Date();
      return "0-"+(today.toLocaleDateString("en-US",AuthService.dateOptions).toString())
    }
  }
  SetUserData(user:any,displayName?: string,photo?: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    // console.log("SetUSerData",user,displayName,photo)
    var currentAccess:access={
      accessLevel:'Unregistered',
    }
    let today  = new Date();
    if (displayName!=undefined || photo!=undefined){
      console.log("Set data true")
      var userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        photoURL: photo,
        emailVerified: user.emailVerified,
        isAdmin:false,
        firstLogin:today.toLocaleDateString("en-US",AuthService.dateOptions).toString(),
        data:user.data || [],
        post:"Unregistered",
        presentToday:this.formatPresentToday(true),
        access:currentAccess,
      }
    }else{
      console.log("Set data false")
      var userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        isAdmin:false,
        firstLogin:today.toLocaleDateString("en-US",AuthService.dateOptions).toString(),
        data:user.data || [],
        post:"Unregistered",
        presentToday:this.formatPresentToday(true),
        access:currentAccess,
      }
    }
    return userRef.set(userData, {
      merge: true
    })
    
  }

  SignOut() {
    // window.alert("Signing Out")
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('fireUser')
      this.router.navigate(['Login']);
    })  
  }

}