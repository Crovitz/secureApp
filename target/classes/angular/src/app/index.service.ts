import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Sample } from './sample';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private sampleUrl = 'http://localhost:8080'

  constructor(
    private http: HttpClient) { }

  getSample (): Observable<Sample> {
    return this.http.get<Sample>(this.sampleUrl);
  }
}
