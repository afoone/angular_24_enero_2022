import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FotosResponse} from '../models/fotos';
;


@Injectable({
  providedIn: 'root'
})
export class UnsplashService {


  //private _search: string;

  constructor(private http: HttpClient) {

  }

  getFotos(search: string): Observable<FotosResponse> {
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=6nQQvODUlv8PAdcTgl9sUT7X_1ERjO64R2qjiFMtfjs&access_key=oYNOUCdPz31YhR1Gf425Tn3PhvGoXXsr6s3vHaQ9UUI`
    )
  }
}
