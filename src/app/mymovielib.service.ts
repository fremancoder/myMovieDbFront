import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Movie} from "./Movie";

@Injectable({providedIn: "root"})
export class MyMovieLibService {

  private baseUrl: string = 'http://localhost:8080/myMovieDb';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMovieList(){
    return this.http
      .get(this.baseUrl+'/movies')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getPage(browsePage: any){
    return this.http
      .get(browsePage.href)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  addMovie(movie: any): Observable<Movie>{
    return this.http.post<Movie>(this.baseUrl + '/movies/', JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  toggleSeen(movie: any, updateLink: any){
    return this.http.put(updateLink.href, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
