import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private readonly URL = environment.api

  private arrayUser: User[] = []

  constructor(private http: HttpClient) { }

  // opcion nativa Observable
  /**
   * 
   * @returns devolver todos los user
   */
  getAllData$() {
    // return this.http.get(`${this.URL}/result`)
    //   .pipe(
    //     map(({  }: any) => {
    //       return 
    //     })
    //   )
  }

}
