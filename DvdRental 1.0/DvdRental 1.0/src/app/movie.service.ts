import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from './IMovie';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http/src/response';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  private _movieUrl = 'http://www.omdbapi.com/?apiKey=6ab83753';

  constructor(private _http: HttpClient) { }

  testMethod() {
    return 'Top 5 Movies to rent';
  }

  // accepting an array of Ids to retrieve movies
  // then calling getMovieById for each element of the array
  getMovies(ids: string[]): Observable<IMovie[]> {
    const movieRequests: Observable<IMovie>[] = ids.map(id => this.getMovieById(id));
    return Observable.forkJoin(movieRequests);
  }

  //accepting a search value to retrieve movies
  // Using ${expression} to send variables in a string
  // beacuse this._movieUrl+id wouldn't work
  getMoviesBySearch(search: string): Observable<IMovie[]> {
    return this._http.get<IMovie[]>(`${this._movieUrl}&&s=${search}`)
      .map(response => response['Search'])
      .do(data => console.log('Movies: ' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  // https://angular.io/api/http/Http
  // https://scotch.io/tutorials/angular-2-http-requests-with-observables
  getMovieById(id: string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this._movieUrl}&&i=${id}`)
      .do(data => console.log('Movie: ' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  private handleError(err : HttpErrorResponse){
    return Observable.throw(err.message);
  }
}
