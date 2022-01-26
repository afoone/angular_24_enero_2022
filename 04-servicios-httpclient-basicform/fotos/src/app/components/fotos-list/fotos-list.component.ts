import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/fotos';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'fotos-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css']
})
export class FotosListComponent implements OnInit {

  public fotos: Foto[]

  constructor(private _fotosService: UnsplashService) {
    console.log("constructor")
    this.fotos = []
  }

  ngOnInit(): void {
    // irme a por las fotos
    this._fotosService.getFotos("paella").subscribe(
      (fotos) => {
        this.fotos = fotos.results
      }
    )
  }

}
