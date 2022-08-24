import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from './local.storage.service';

@Injectable({
    providedIn: 'root'
})

export class BitcoinService {

    constructor(private http: HttpClient, private storageService: StorageService) { }
    bitcoinValues!: any
    bitCoinPrices!: any

    data:any
    values$: any
    prices$: any

    async getRate(coins: number) {
        return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    }

    async getMarketPrice() {
        return await this.getData('market-price')
    }

    async getConfirmedTransactions() {
        return await this.getData('trade-volume')
    }

    async load(key:string){
        return await this.storageService.load(key)
    }

    async store(key:string,value:any){
        this.storageService.store(key, value)
    }

    async getData(val: string) {
        return this.http.get(`https://api.blockchain.info/charts/${val}?timespan=5months&format=json&cors=true`)
    }
}