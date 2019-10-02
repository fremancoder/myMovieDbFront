import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({providedIn: "root"})
export class ExtMovieLibService {

  pageUpdated = new EventEmitter<number>();

  showDetails = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  search(movieTitle: string, pageNbr: number){
    return this.http
      .get('https://api.themoviedb.org/3/search/movie?api_key=0d00a494bab46a24438adc4da1d99f0f&language=en-US&query='+movieTitle+'&page='+pageNbr+'&include_adult=false')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  find(movieId: number){
    return this.http
      .get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=0d00a494bab46a24438adc4da1d99f0f&language=en-US&append_to_response=videos')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getCast(movieId: number){
    return this.http
      .get('https://api.themoviedb.org/3/movie/'+movieId+'/credits?api_key=0d00a494bab46a24438adc4da1d99f0f')
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

