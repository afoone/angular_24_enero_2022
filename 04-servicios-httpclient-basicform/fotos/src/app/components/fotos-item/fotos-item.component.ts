import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/fotos';

@Component({
  selector: 'fotos-fotos-item',
  templateUrl: './fotos-item.component.html',
  styleUrls: ['./fotos-item.component.css']
})
export class FotosItemComponent implements OnInit {

  @Input('foto')
  public foto: Foto | undefined

  constructor() { }

  ngOnInit(): void {
  }

  isVertical():boolean {
    return this.foto ? this.foto?.height > this.foto?.width : true
  }

}
