import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {
  @Input()
  public stock: Stock | undefined;

  @Output("delete")
  public emitDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  setFavorite() {
    if (this.stock) {
      this.stock.favorite = true;
    }
  }

  ngOnInit(): void {}

  deleteStock = () => {
    if (this.stock) {
      this.emitDelete.emit(this.stock.code);
    }
  };
}
