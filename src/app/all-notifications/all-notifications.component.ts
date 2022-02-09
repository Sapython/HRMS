import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataProvider } from '../providers/data.provider';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss'],
})
export class AllNotificationsComponent implements OnInit {
  selectedNotificationBody:string="";
  selectedNotificationTitle:string="";
  selectedNotificationSubtitle:string="";
  selectedNotificationTags=[];
  newNotifications=[
    {
      "id":"1",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"2",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"3",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"4",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"5",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"6",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    
  ]
  
  readNotifications=[
    {
      "id":"1",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"2",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"3",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    {
      "id":"4",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "dateTime":"21/07/09-12:30",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis.",
      "tags":[
        {"color":"success","title":"Developer"},
        {"color":"success","title":"Developer"},
      ]
    },
    
  ]
  constructor(public router: Router,public dataProvider:DataProvider,public afs: AngularFirestore,) { }
  ngOnInit() {}
  removeItem(id){
    let index=0
    for(let notification of this.newNotifications){
      if (notification["id"]==id){
        this.readNotifications.push(notification)
        this.newNotifications.splice(index,1)
      }
      index+=1
    }
  }
  openNotification(title,date,body,tags){
    var card = document.getElementById("hiddenInfoCard") as HTMLElement;
    card.style.right="-10px";
    this.selectedNotificationTitle=title
    this.selectedNotificationSubtitle=date
    this.selectedNotificationBody=body
    this.selectedNotificationTags=tags;
  }
  closeNotification(){
    var card = document.getElementById("hiddenInfoCard") as HTMLElement;
    card.style.right="-60vw";
  }
  // team(data){
  //   this.afs.firestore.collection("")
  //   return [];
  // }
  // TODO: 
}
