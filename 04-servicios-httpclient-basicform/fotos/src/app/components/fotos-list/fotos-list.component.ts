import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Foto } from 'src/app/models/fotos';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'fotos-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css'],
})
export class FotosListComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  public fotos: Foto[];

  @Input('search')
  public _search: string | undefined;

  constructor(private _fotosService: UnsplashService) {
    console.log('constructor');
    this.fotos = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
    // irme a por las fotos
    this._search &&
      this._fotosService.getFotos(this._search || '').subscribe((fotos) => {
        this.fotos = fotos.results;
      });
  }

  masFotos() {
    this._fotosService.masFotos().subscribe(
      (fotos) => {
        //this.fotos.push(...fotos.results)
        this.fotos = [...this.fotos, ...fotos.results]
      }
    )
  }

  ngDoCheck(): void {
    console.log('do check');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
