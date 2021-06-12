import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
})
export class PayrollComponent implements OnInit,AfterViewInit {
  @ViewChild('payrollCanvas') canvas:ElementRef;
  ngAfterViewInit(){
    console.log("Alpha: ",this.canvas)
    if (this.canvas){
      const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 350);
      gradient.addColorStop(0, 'rgba(120, 87, 255,1)');
      gradient.addColorStop(1, 'rgba(255, 87, 132,0.8)');
      this.miniChartColors = [
          {
              backgroundColor: gradient
          }
      ];
    } else {
      console.log("ALpha: ",this.canvas);
    }
  }
  daysInletters=['S','M','Tu','W','Th','F','Sa'];
  constructor() { }

  ngOnInit() {
    this.interviews=this.interviewsMainData;
  }
  miniChartLabels=["S","M","T","W","Th","F","Sa"];
  miniChartData:ChartDataSets[] = [
    { data: [20,0,25,10,5,30,10], label: 'Timings' },
  ];
  miniChartColors:Color[] = [{backgroundColor:"#203528"}]
  // noDisplay:ChartTitleOptions={display:"none"}
  
  public miniChartOptions:ChartOptions={
    title:{display:false},
    legend:{display:false},
    tooltips:{enabled:false},
    // showLines:false,
    spanGaps:false,
    elements:{point:{radius:0},},
  }
  paymentRequests=[
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Monthly Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Monthly Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Monthly Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Early Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Early Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Early Payment",
    },
    { 
      "employeeName":"Arnubh Kumar",
      "requestValid":true,
      "requestTime":"12:30 PM",
      "avatar":"https://picsum.photos/100",
      "type":"Early Payment",
    },
    
  ]
  interviewFilter=false;
  interviewsMainData=[
    {
      "candidate":"Random Name",
      "status":"Active",
      "interviewer":"Name",
      "schedule":"Technical Aptitude",
      "dateTime":"Today"
    },
    {
      "candidate":"Random Name",
      "status":"Final",
      "interviewer":"Name",
      "schedule":"Technical Aptitude",
      "dateTime":"Today"
    },
    {
      "candidate":"Random Name",
      "status":"Active",
      "interviewer":"Name",
      "schedule":"Technical Aptitude",
      "dateTime":"Upcoming"
    },
    {
      "candidate":"Random Name",
      "status":"Beginner",
      "interviewer":"Name",
      "schedule":"Technical Aptitude",
      "dateTime":"Tomorrow"
    },
  ];
  interviews=[];
  toggleInterviewData(type:string){
    if (type=="today"){
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("interviewUpcoming") as HTMLInputElement).style.backgroundColor="transparent";
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
      (document.getElementById("interviewUpcoming") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["dateTime"]=="Yesterday"){
          this.interviews.push(alpha)
        }
      }
    }else if (type=="upcoming"){
      (document.getElementById("interviewUpcoming") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["dateTime"]=="Upcoming"){
          this.interviews.push(alpha)
        }
      }
    }
    else{
      this.interviewFilter=false;
      (document.getElementById("interviewUpcoming") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("interviewYesterday") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("interviewToday") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=this.interviewsMainData;
    }
  }
}
