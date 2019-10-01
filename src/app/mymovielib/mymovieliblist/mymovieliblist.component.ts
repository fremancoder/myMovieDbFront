import {Component, OnInit} from '@angular/core';
import {MyMovieLibService} from "../../mymovielib.service";

@Component({
  selector: 'app-mymovieliblist',
  templateUrl: './mymovieliblist.component.html',
  styleUrls: ['./mymovieliblist.component.css']
})
export class MymovieliblistComponent implements OnInit {

  myMovieList;

  constructor(private myMovieLibService: MyMovieLibService) { }

  ngOnInit() {
    this.myMovieLibService.getMovieList().subscribe(
      res => {
        this.myMovieList = res;
      }
    );
  }

  browsePage(browsePage: any){
    this.myMovieLibService.getPage(browsePage).subscribe(
      res => {
        this.myMovieList = res;
      }
    )
  }

  toggleSeen(movie: any, updateLink : any){
    movie.seen = !movie.seen;
    this.myMovieLibService.toggleSeen(movie, updateLink).subscribe( )
  }

}
