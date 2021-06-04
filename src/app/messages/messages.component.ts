import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  notifications=[
    {
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    {
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    {
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    {
      "title":"Hello Mister",
      "image":"https://sapython.me/favicon2.ico",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus tincidunt commodo. Nunc justo nisi, vestibulum facilisis porta vestibulum, ultrices volutpat arcu. Quisque nec dui mattis."
    },
    
  ]
  constructor() { }

  ngOnInit() {}

}
