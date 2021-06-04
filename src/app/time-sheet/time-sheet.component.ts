import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss'],
})
export class TimeSheetComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  todo = [
    {
      "name":'Get to work',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Pick up groceries',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Go home',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Fall asleep',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
  ];

  done = [
    {
      "name":'Get to work',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Pick up groceries',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Go home',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Fall asleep',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
  ];

  haveBug=[
    {
      "name":'Get to work',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Pick up groceries',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Go home',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
    {
      "name":'Fall asleep',
      "description":"Go to work and do some random stuff to show some creativty and get some paychecks and a loyalty card to buy th company.",
      "mentions":[
        {
          "text":"team",
          "color":"success"
        },
        {
          "text":"developers",
          "color":"tertiary"
        },
        {
          "text":"designers",
          "color":"danger"
        },
        
      ]
    },
  ];

  inReview=[]
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
} 
