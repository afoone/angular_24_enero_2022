import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, DoCheck, OnDestroy, OnChanges {


  public arr: {content: number[]} | undefined
  public alert  = false

  @Input('texto')
  public texto: string | undefined

  constructor() {

    console.log(
      'constrctuor'
    )
  }
  ngDoCheck(): void {
    console.log('do check')
    //  cada vez que nota un pequeño cambio ejecuta este elemento
    // lo tendríamo que usar para detectar cambios que Angular no detecta
    if (this.arr?.content.length === 5) {
      this.alert = true
    } else {
      this.alert = false
    }
  }
  ngOnDestroy(): void {
    console.log('destroy')

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  ngOnInit(): void {

      this.arr = {
        content: [1,2,3,4,5]
      }
    //inicializar el componente después de haberlo renderizado una vez
    console.log('init')
  }

}
