import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FotosResponse} from '../models/fotos';


@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private _search: string;
  private _page: number;
  //private _fotos : Foto[]

  constructor(private http: HttpClient) {
    this._page= 1;
    this._search = ""
  }

  getFotos(search: string): Observable<FotosResponse> {
    this._page = 1
    this._search = search
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=${this._page}&query=${this._search}&client_id=6nQQvODUlv8PAdcTgl9sUT7X_1ERjO64R2qjiFMtfjs&access_key=oYNOUCdPz31YhR1Gf425Tn3PhvGoXXsr6s3vHaQ9UUI`
    )
  }

  masFotos() {
    this._page++
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=${this._page}&query=${this._search}&client_id=6nQQvODUlv8PAdcTgl9sUT7X_1ERjO64R2qjiFMtfjs&access_key=oYNOUCdPz31YhR1Gf425Tn3PhvGoXXsr6s3vHaQ9UUI`
    )
  }
}
