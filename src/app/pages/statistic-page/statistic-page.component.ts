import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/Bitcoin.service';
import { Observable, Subscription } from 'rxjs';
import { ChartModel } from 'src/app/models/chart.model';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketChart = new ChartModel();
  transactionsChart = new ChartModel();

  marketPriceType: ChartType = ChartType.BarChart
  transactionsType: ChartType = ChartType.AreaChart

  width: number = window.innerWidth - 100
  chartWide: number = window.innerWidth * 0.78


  async ngOnInit(): Promise<void> {
    var transactions = await this.bitcoinService.load('transactions')
    var isNewData = false
    if (transactions) isNewData = this.checkData(transactions.values[transactions.values.length - 1].x * 1000)
  
    if (!transactions || !isNewData) {
      transactions = (await this.bitcoinService.getConfirmedTransactions()).subscribe((res: any) => this.filterTransactionsData(res))
    } else {
      this.filterTransactionsData(transactions)
    }

    var marketData = await this.bitcoinService.load('market')
    isNewData = false
    if (marketData) isNewData = this.checkData(marketData.values[marketData.values.length - 1].x * 1000)

    if (!marketData || !isNewData) {
      marketData = (await this.bitcoinService.getMarketPrice()).subscribe((res: any) => this.filterMarketData(res))
    } else {
      this.filterMarketData(marketData)
    }
  }

  filterTransactionsData(res: any): void {
    this.bitcoinService.store('transactions', res)

    this.transactionsChart.data = this._filterData(res);
    this.transactionsChart.columnNames = ['Month', 'Transactions']
    this.transactionsChart.options.colors = ['#90ee90']
    this.transactionsChart.options.titleTextStyle.color =  '#90ee90'
    this.transactionsChart.title = res.name;
  }

  filterMarketData(res: any): void {
    this.bitcoinService.store('market', res)

    this.marketChart.data = this._filterData(res)
    this.marketChart.columnNames = ['Month', 'Bitcoin value']
    this.marketChart.options.colors = ['#add8e6']
    // hAxis: { textStyle: { color: '#151515' } },
    //             vAxis: { textStyle: { color: '#151515' } },
    this.marketChart.options.titleTextStyle.color =  '#add8e6'
    this.marketChart.title = res.name;
  }

  _filterData(result: any) {
    return result.values.map((value: { x: number; y: string; }) => {
      let date = new Date(value.x * 1000).toLocaleDateString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit' });
      let bitCoinRate = value.y as string;
      return [date, bitCoinRate];
    })
  }

  onResize(event: any) {
    console.log(window.innerWidth);
    this.width = window.innerWidth - 10
    this.chartWide = window.innerWidth * 0.78
  }

  checkData(date: number) {
    const time = (Date.now() - date) / 3600000

    if (time > 48) return false
    else return true
  }
}
