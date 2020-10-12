import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }
//getting stock
  get() {
    return stocks.slice();
  }
  //adding stock
  add(stock){
    stocks.push(stock);
    return this.get();
  }
  //deleting stock
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }
  //loading records from API
  load(symbols) {
    if(symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
