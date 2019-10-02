import {Component, Input, OnInit} from '@angular/core';
import {ExtMovieLibService} from "../../extmovielib.service";
import {Movie} from "../../Movie";
import {MyMovieLibService} from "../../mymovielib.service";

@Component({
  selector: 'app-extmovieliblist',
  templateUrl: './extmovieliblist.component.html',
  styleUrls: ['./extmovieliblist.component.css']
})
export class ExtmovieliblistComponent implements OnInit {

  @Input() movies;

  public constructor(private extMovieLibService: ExtMovieLibService, private myMovieLibService: MyMovieLibService){}

  ngOnInit() {
  }

  browse(pageNbr: number){
    this.extMovieLibService.pageUpdated.emit(pageNbr);
  }

  addMovie(extMovie: any){
    let movie = new Movie();

    movie.title = extMovie.title;
    movie.externalId = extMovie.id;
    movie.posterPath = extMovie.poster_path;
    movie.seen = false;

    this.myMovieLibService.addMovie(movie).subscribe( )
  }

  openDetails(movieId: number){
    this.extMovieLibService.showDetails.emit(movieId);
  }
}
