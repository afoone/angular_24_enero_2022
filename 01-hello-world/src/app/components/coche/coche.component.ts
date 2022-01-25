import { Component } from "@angular/core";

@Component(
  {
    selector: "imagina-coche",
    templateUrl: './coche.component.html'
  }
)
export class CocheComponent {
  public brand: string;
  public model: string;
  public year: number;
  private _hola: string;

  constructor() {
    this.brand = "BMW",
    this.model ="M2",
    this.year = 2019,
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
