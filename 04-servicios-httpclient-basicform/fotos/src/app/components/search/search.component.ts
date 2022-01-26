import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'fotos-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string;

  @Output('search')
  public searchEmitter: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.search = "avion"
   }

  ngOnInit(): void {
  }

  onSearch() {
    // buscaremos
    this.searchEmitter.emit(this.search)
  }


}





  // onKeyPressed(e: any) {
  //   console.log(e.target.value)
  //   this.search = e.target.value
  // }
