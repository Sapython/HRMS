import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  notifications=[
    { 
      "id":"1",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    { 
      "id":"2",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    { 
      "id":"3",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    { 
      "id":"4",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    { 
      "id":"5",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    { 
      "id":"6",
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    
  ]
  constructor(public router: Router,) { }
  ngOnInit() {}
  removeItem(id){
    let index=0
    for(let notification of this.notifications){
      if (notification["id"]==id){
        this.notifications.splice(index,1)
      }
      index+=1
    }
  }

}
