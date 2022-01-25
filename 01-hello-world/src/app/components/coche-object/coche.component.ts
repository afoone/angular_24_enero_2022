import { Component } from "@angular/core";

interface Coche {
  brand: string,
  model: string,
  year?: number
}

@Component(
  {
    selector: "imagina-coche",
    templateUrl: './coche.component.html'
  }
)
export class CocheComponent {
  public coche: Coche;
  private _hola: string;

  constructor() {
    this.coche = {
      brand: "Mercedes",
      model: "CLA",
      year: 2020
    }
    this._hola = "hola mundo"
  }

  get hola(): string {
    return this._hola.toUpperCase()
  }

  // this.hola="adios"
  set hola(hola: string) {
    this._hola = hola
  }


}
