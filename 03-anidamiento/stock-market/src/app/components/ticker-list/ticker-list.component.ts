import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker-list',
  templateUrl: './ticker-list.component.html',
  styleUrls: ['./ticker-list.component.css'],
})
export class TickerListComponent implements OnInit {
  public stocks: Array<Stock>;

  constructor() {
    this.stocks = [];
    this.stocks.push(new Stock('Telefonica', 'TEL', 20.4, 21));
    this.stocks.push(new Stock('Iberdrola', 'IBE', 15.4, 21));
    this.stocks.push(new Stock('Endesa', 'END', 238, 21));
    this.stocks.push(new Stock('Octopus', 'OCT', 33.4, 21));
  }

  ngOnInit(): void {}

  deleteItem(code: string) {
    // to implement
    console.log("borrando ", code)
    this.stocks = this.stocks.filter(
      e => e.code != code
    )
  }
}
