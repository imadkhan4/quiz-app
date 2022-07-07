import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';
import { FlushService } from 'src/app/_services/flush.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  result: any;
  resultLegends: Label[] = ["correct", "incorrect"];
  resultChartData: ChartDataSets[] = [
    {
      data: [],
      label: this.translate.instant('total_visitors')
    }];
  resultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    segmentShowStroke: false,
    title: {
      display: true,
      text: this.translate.instant('quiz_score')
    },
  };
  resultChartColors: any[] = [{ backgroundColor: ['#24D724', '#FF0000'] }];
  constructor(
    private translate: TranslateService,
    private flushService: FlushService
  ) {
    this.result = flushService.Data;
  }

  ngOnInit() {
    this.resultChartData[0].data.push(this.result.correctAnswers, this.result.incorrectAnswers);
  }



}
