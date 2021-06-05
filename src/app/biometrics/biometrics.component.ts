import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartLegendLabelOptions, ChartLegendOptions, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss'],
})
export class BiometricsComponent implements OnInit,AfterViewInit {
  @ViewChild('miniCanvas') canvas:ElementRef;
  constructor() { }
  ngAfterViewInit(){
    console.log("Alpha: ",this.canvas)
    if (this.canvas){
      const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 60);
      gradient.addColorStop(0, 'rgba(52, 213, 235,1)');
      gradient.addColorStop(1, 'rgba(52, 213, 235,0.2)');
      this.miniChartColors = [
          {
              backgroundColor: gradient
          }
      ];
    } else {
      console.log("ALpha: ",this.canvas);
    }
  }
  ngOnInit() {
    this.interviews=this.interviewsMainData;
    
  }
  public pieChartData: ChartDataSets[] = [
    { data: [20,5,25,10,5,30], label: 'Timings' },
  ];
  miniChartLabels=["S","M","T","W","Th","F","Sa"];
  miniChartData:ChartDataSets[] = [
    { data: [20,5,25,10,5,30,10], label: 'Timings' },
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
  public pieChartLabels: Label[] = ['Developer', 'Marketing', 'Soli Project', 'Grahpics Designer', 'Testers','Web Developer'];
  labelOptions:ChartLegendLabelOptions={usePointStyle:true}
  pieLegendOptions:ChartLegendOptions={align:"end",position:"right",labels:this.labelOptions}
  public pieChartOptions:ChartOptions={
    legend:this.pieLegendOptions,
    animation:{duration:2000,easing:'easeInOutCubic',animateRotate:true}
  }
  public pieChartColors: Color[] = [
    {
      borderColor: "transparent",
      pointBorderColor: "#80b6f4",
      // pointBackgroundColor: "#80b6f4",
      pointHoverBackgroundColor: "#80b6f4",
      pointHoverBorderColor: "#80b6f4",
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      borderWidth: 2,
      backgroundColor:['#66c2ff','#668aff','#6b63ff','#8d63ff','#ff639a','#ff5c64']
    },
  ];
  daysInletters=['S','M','Tu','W','Th','F','Sa'];
  interviewFilter=false;
  interviewsMainData=[
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"danger","text":"Web Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"success","text":"App Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Failed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Upcoming",
      "team":{"color":"warning","text":"Marketing"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Tomorrow",
      "team":{"color":"success","text":"App Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"danger","text":"Web Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"success","text":"App Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Failed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Upcoming",
      "team":{"color":"warning","text":"Marketing"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Tomorrow",
      "team":{"color":"success","text":"App Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"danger","text":"Web Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Today",
      "team":{"color":"success","text":"App Developers"},
    },
    {
      "candidate":"Random Name",
      "status":"Failed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Upcoming",
      "team":{"color":"warning","text":"Marketing"},
    },
    {
      "candidate":"Random Name",
      "status":"Passed",
      "interviewer":"Name",
      "totalLeave":50,
      "leaveTaken":43,
      "dateTime":"Tomorrow",
      "team":{"color":"success","text":"App Developers"},
    },
    
  ];
  interviews=[];
  toggleInterviewData(type:string){
    if (type=="failed"){
      (document.getElementById("failedBiometric") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("passedBiometric") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["status"]=="Failed"){
          this.interviews.push(alpha)
        }
      }
    } else if (type=="passed"){
      (document.getElementById("passedBiometric") as HTMLInputElement).style.backgroundColor="#3596f0";
      (document.getElementById("failedBiometric") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=[]
      this.interviewFilter=true;
      for(let alpha of this.interviewsMainData){
        if (alpha["status"]=="Passed"){
          this.interviews.push(alpha)
        }
      }
    }
    else{
      this.interviewFilter=false;
      (document.getElementById("passedBiometric") as HTMLInputElement).style.backgroundColor="transparent";
      (document.getElementById("failedBiometric") as HTMLInputElement).style.backgroundColor="transparent";
      this.interviews=this.interviewsMainData;
    }
  }
}
function ChartTitleOptions(): import("chart.js").ChartTitleOptions {
  throw new Error('Function not implemented.');
}

