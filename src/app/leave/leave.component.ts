import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
})
export class LeaveComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [9, 10, 10, 11, 12, 9, 10], label: 'Timings' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors: Color[] = [
    {
      borderColor: "#80b6f4",
      pointBorderColor: "#80b6f4",
      // pointBackgroundColor: "#80b6f4",
      pointHoverBackgroundColor: "#80b6f4",
      pointHoverBorderColor: "#80b6f4",
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      borderWidth: 2,
      backgroundColor:'rgba(28, 153, 255,0.5)'
    },
  ];
  totalLeave=[
    {
      "name":"Person Name",
      "leftLeave":"54",
      "leaveTaken":"32",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    {
      "name":"Person Name",
      "leftLeave":"5",
      "leaveTaken":"48",
    },
    
  ]
  constructor() { }
  interviewFilter=false;
  interviewsMainData=[
    {
      "employee":"Random Name",
      "post":"Senior Developer",
      "branch":"Web Developer",
      "interviewer":"Name",
      "totalLeaveDay":"3",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "branch":"Android Developer",
      "post":"Senior Developer",
      "interviewer":"Name",
      "totalLeaveDay":"5",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "post":"Senior Designer",
      "branch":"Designer",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    {
      "employee":"Random Name",
      "post":"Assistant Manager",
      "branch":"Marketing",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    {
      "employee":"Random Name",
      "post":"Senior Developer",
      "branch":"Web Developer",
      "interviewer":"Name",
      "totalLeaveDay":"3",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "branch":"Android Developer",
      "post":"Senior Developer",
      "interviewer":"Name",
      "totalLeaveDay":"5",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "post":"Senior Designer",
      "branch":"Designer",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    {
      "employee":"Random Name",
      "post":"Assistant Manager",
      "branch":"Marketing",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    {
      "employee":"Random Name",
      "post":"Senior Developer",
      "branch":"Web Developer",
      "interviewer":"Name",
      "totalLeaveDay":"3",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "branch":"Android Developer",
      "post":"Senior Developer",
      "interviewer":"Name",
      "totalLeaveDay":"5",
      "dateTime":"Today"
    },
    {
      "employee":"Random Name",
      "post":"Senior Designer",
      "branch":"Designer",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    {
      "employee":"Random Name",
      "post":"Assistant Manager",
      "branch":"Marketing",
      "interviewer":"Name",
      "totalLeaveDay":"1",
      "dateTime":"Yesterday"
    },
    
  ];
  interviews=[];
  ngOnInit() {
    this.interviews=this.interviewsMainData;
  }
  toggleInterviewData(type:string){
    if (type=="today"){
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["dateTime"]=="Today"){
          this.interviews.push(alpha)
        }
      }
    }else if (type=="yesterday"){
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["dateTime"]=="Yesterday"){
          this.interviews.push(alpha)
        }
      }
    }
    else{
      this.interviewFilter=false;
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=this.interviewsMainData;
    }
  }
}
