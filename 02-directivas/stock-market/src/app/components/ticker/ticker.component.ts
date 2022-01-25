import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {
  public stocks: Stock[];

  constructor() {
    // this.stock = new Stock("Gas natural", "GAS", 23.4, 21)
    this.stocks = [];
    this.stocks.push(new Stock('Gas natural', 'GAS', 23.4, 21));
    this.stocks.push(new Stock('Telefonica', 'TEL', 20.4, 21));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 15.4, 21));
    this.stocks.push(new Stock('Endesa', 'END', 238, 21));
    this.stocks.push(new Stock('Octopus', 'OCT', 33.4, 21));
  }

  setFavorite(i: number) {
    this.stocks[i].favorite = true;
  }

  ngOnInit(): void {}
}
