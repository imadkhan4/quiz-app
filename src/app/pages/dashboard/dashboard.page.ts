import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService } from 'src/app/_services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
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

  resultChartColors: any[] = [{ backgroundColor: ['#24D724', '#e6f598'] }];
  constructor(
    private translate: TranslateService,
    private flushService: FlushService
  ) {
    this.result = flushService.Data;
    console.log(this.result)
    this.result = {
      name: 'imad khan',
      category:'General Knowledged',
      correctAnswers : 7,
      incorrectAnswers :3,
      totalMarks: 10,
      result: 'Pass',
      type:'Easy'

    }
  }


  ngOnInit() {
    this.getCharts();
  }

  async getCharts() {
    this.resultChartData[0].data.push(8, 2);
    // await this._apiService.fetchRecords('charts')
    //   .subscribe({
    //     next: (res) => {

    //     },
    //     error: error => {
    //       console.error(error);
    //     },
    //   });
  }


}
