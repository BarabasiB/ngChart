import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData = [
    [10, 20, 30, 40, 50],
    [23, 45, 34, 89, 56],
    [11, 22, 33, 44, 55]
  ];
  public lineChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public lineChartType = 'line';

  // private lineChartSeries:Array<any> = ['Series A', 'Series B', 'Series C'];

  public lineChartOptions = {
    animation: false,
    responsive: true,
    fill: false,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
  };

  public lineChartLegend = true;
  public lineChartSeries = ['Happines'];

  constructor() { }

  ngOnInit() {
  }

}
