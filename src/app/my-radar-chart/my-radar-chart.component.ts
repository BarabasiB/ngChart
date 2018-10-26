import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['First', 'Second', 'Third', 'Fourth'];
  public radarChartData = [
    [120, 130, 180, 70],
    [90, 150, 200, 45]
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
