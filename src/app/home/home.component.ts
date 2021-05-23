import { Component, OnInit,ViewChild ,ViewEncapsulation} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';
import{AuthserviceService} from '../authservice.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { from } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // chartOptions = {
  //   responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  // }
  
  // constructor (private httpService: HttpClient) { }
  // movies: string[] = [];
  // labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  // public chartType: string = 'bar';
  // // OBJECT FOR datasets WITH EMPTY data.
  // chartData = [
  //   {
  //     label: '1st Year',
  //     data: [], 
  //   },
  //   { 
  //     label: '2nd Year',
  //     data: []
  //   }
  //  ];

  //  // CHART COLOR.
  //  colors = [
  //   { // 1st Year.
  //     backgroundColor: 'rgba(77,83,96,0.2)'
  //   },
  //   { // 2nd Year.
  //     backgroundColor: 'rgba(30, 169, 224, 0.8)'
  //   }
  //  ]
  
  // ngOnInit () {
  //   this.httpService.get('./assets/FinalProjQSN.json',{responseType : 'json'}).subscribe(
  //    ( data: any )=> {
  //       this.chartData = data ;	 // FILL THE ARRAY WITH DATA.
  //       //  console.log(this.arrBirds[1]);
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }
  // onChartClick(event : any) {
  //   console.log(event);
  // }
  @ViewChild("chart") "chart": ChartComponent;
  public chartOptions: any;
  chartData: any;
  Tcount=0;
  Hcount=0;

  constructor(private authSer: AuthserviceService) {
    
  }
  ngOnInit () {
    
    this.chartData=this.authSer.getmovies()
    //console.log(this.chartData)
    this.chartData.forEach((element:any )=> {
      if(element.language=="Telugu"){
        this.Tcount+=1;
      }
      else{
        this.Hcount+=1;
      }

    });
    
    this.chartOptions = {
      series: [
        {
          name: "Count",
          data: [this.Tcount,this.Hcount]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Telugu","Hindi"]
      },
      yaxis: {
        categories: [0,1,2,3,4,5]
      }
    };
}

}
