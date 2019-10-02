import { Component, OnInit } from '@angular/core';
import {ExtMovieLibService} from "../../extmovielib.service";

@Component({
  selector: 'app-extmovielibdetail',
  templateUrl: './extmovielibdetail.component.html',
  styleUrls: ['./extmovielibdetail.component.css']
})
export class ExtmovielibdetailComponent implements OnInit {

  movieDetails;
  cast = undefined;
  movieId: number = undefined;

  constructor(private extMovieLibService: ExtMovieLibService) {
    this.extMovieLibService.showDetails.subscribe(
      (movieId: number) => {
        this.searchDetails(movieId);
      }
    )
  }

  ngOnInit() {
  }

  searchDetails(movieId: number){
    this.cast = null;
    this.movieId = movieId;
    this.extMovieLibService.find(movieId).subscribe(
         res => {this.movieDetails= res;}
    )
  }

  showCast(){
    if(this.movieId != null){
      this.extMovieLibService.getCast(this.movieId).subscribe(
        res => {this.cast= res;}
      )
    }
  }
}
