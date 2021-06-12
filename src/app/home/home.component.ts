import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MessagesComponent } from '../messages/messages.component';
import { NotificationComponent } from '../notification/notification.component';
import { ChartDataSets, ChartLegendLabelOptions, ChartLegendOptions, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataProvider } from '../providers/data.provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,AfterViewInit {
  @ViewChild('timingChart') canvas:ElementRef;
  ngAfterViewInit(){
    const dayProgress=document.getElementById("dayProgress") as HTMLInputElement;
    let date = new Date()
    dayProgress.value=(((((date.getHours()-9)*60)+date.getMinutes())/54000)*100).toString()
    console.log(dayProgress.value,((date.getHours()-9)*60))
    setInterval(function(){
      let date = new Date()
      dayProgress.value=(((((date.getHours()-9)*60)+date.getMinutes())/54000)*100).toString()
      console.log(dayProgress.value,((date.getHours()-9)*60))
    },60000)
    console.log("Alpha: ",this.canvas)
    if (this.canvas){
      const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, 'rgba(255, 118, 87,1)');
      gradient.addColorStop(1, 'rgba(255, 89, 139,0.7)');
      this.lineChartColors = [
          {
              backgroundColor: gradient
          }
      ];
    } else {
      console.log("ALpha: ",this.canvas);
    }
  }
  totalWorkingDays:number=0;
  totalCompleteDays:number=0;
  getWorkingDays(){
    const holidays = [
      [7, 4], // 4th of July
      [10, 31] // Halloween
    ];
    
    var d = new Date();
    var currentDay = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var total = 0;
    var done = 0;
    for (var day = 1; day <= 31; day++) {
      var t = new Date(year, month, day);
      if (t.getMonth() > month) break; // month has less than 31 days
      if (t.getDay() == 0 || t.getDay() == 6) continue; // no weekday
      if (holidays.some(h => h[0] - 1 === month && h[1] === day)) continue; // holiday
      total++; // increase total
      if (t.getDate() <= currentDay) done++; // increase past days
    }
    // document.body.innerHTML = `Today is weekday ${done} of ${total}.`
    this.totalWorkingDays=total;
    this.totalCompleteDays=done;
  }
  date: Date = new Date();
  public lineChartData: ChartDataSets[] = [
    { data: [9, 10, 10, 11, 12, 9, 10], label: 'Timings' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors: Color[] = [
    {
      borderColor: "rgb(255, 200, 200)",
      pointBorderColor: "rgb(255, 255, 255)",
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
  public pieChartData: ChartDataSets[] = [
    { data: [20,5,25,10,5,30], label: 'Timings' },
  ];
  public pieChartLabels: Label[] = ['Developer', 'Marketing', 'Soli Project', 'Grahpics Designer', 'Testers','Web Developer'];
  labelOptions:ChartLegendLabelOptions={usePointStyle:true}
  pieLegendOptions:ChartLegendOptions={align:"end",position:"right",labels:this.labelOptions}
  public pieChartOptions:ChartOptions={
    legend:this.pieLegendOptions,
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
  constructor(public popoverController: PopoverController, public dataProvider:DataProvider) { }
  daysInletters=['S','M','Tu','W','Th','F','Sa'];
  days=[];

  printData(event){
    console.log(event)
  }

  async notifications(ev: any) {  
    const popover = await this.popoverController.create({
        component: NotificationComponent,
        event: ev,
        animated:true,
        backdropDismiss:true,
    });
    return await popover.present();
  }
  async messages(ev: any) {  
    const popover = await this.popoverController.create({
        component: MessagesComponent,
        event: ev,
        animated:true,
        backdropDismiss:true,
    });
    return await popover.present();
  }
  ngOnInit() {
    // this.dataProvider.showOverlay=true;
    this.getWorkingDays();
    this.interviews=this.interviewsMainData;
    // (document.getElementById("notificationButton") as HTMLElement).addEventListener('click',this.notifications);
    for (let i=0; i<=8; i++){
      let isTrue=false;
      if (this.date.getDay()==i){
        isTrue=true;
      }
      this.days.push({"day":this.daysInletters[i],"value":isTrue})
    }
  }
  toggleReorder() {
    const reorderGroup = document.getElementById('reorder') as any;
    reorderGroup.disabled = !reorderGroup.disabled;
    reorderGroup.addEventListener('ionItemReorder', ({detail}) => {
      detail.complete(true);
    });
  }
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
