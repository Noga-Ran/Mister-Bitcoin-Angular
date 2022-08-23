import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/Bitcoin.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  width:number = window.innerWidth - 100
  chartWide:number = window.innerWidth * 0.78

  marketPriceType: ChartType = ChartType.AreaChart
  marketPriceChart = {
    title: 'Market Price(USD)',
    options: { colors: ['#f2a900', '#f3b49f', '#f6c7b6'], is3D: true }
  }
  marketData!: any

  ConfirmedTransactionsType: ChartType = ChartType.LineChart
  ConfirmedTransactionsChart = {
    title: 'Confirmed transactions per day ',
    columns: ['x', 'y'],
    options: { colors: ['black', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true }
  }
  tranData!: any

  async ngOnInit(): Promise<void> {

    this.tranData = await this.bitcoinService.load('transactions')
    if (!this.tranData) {
      console.log('sending api');

      this.tranData = (await this.bitcoinService.getConfirmedTransactions()).subscribe((res: any) => {
        this.tranData = res.values.map((value: {
          x: any; y: any;
        }) => [value.x, value.y])
        this.bitcoinService.store('transactions', this.tranData)
      })
    }

    this.marketData = await this.bitcoinService.load('market')
    if (!this.marketData) {
      console.log('sending api');
      
      this.marketData = (await this.bitcoinService.getMarketPrice()).subscribe((res: any) => {
        this.marketData = res.values.map((value: {
          x: any; y: any;
        }) => [+value.x, +value.y])
        this.bitcoinService.store('market', this.marketData)
      })      
    }
  }

  onResize(event:any){
    console.log(window.innerWidth);
    this.width = window.innerWidth - 10
    this.chartWide = window.innerWidth * 0.78
    
  }

}
