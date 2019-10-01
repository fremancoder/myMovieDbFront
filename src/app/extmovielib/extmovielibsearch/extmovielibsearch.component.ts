import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ExtMovieLibService} from "../../extmovielib.service";

@Component({
  selector: 'app-extmovielibsearch',
  templateUrl: './extmovielibsearch.component.html',
  styleUrls: ['./extmovielibsearch.component.css'],
})
export class ExtmovielibsearchComponent implements OnInit {

  @Output() moviesSearched = new EventEmitter();
  pageNumber: number = 1;
  public movieTitle: string;

  constructor(private extMovieLibService: ExtMovieLibService){
    this.extMovieLibService.pageUpdated.subscribe(
      (pageNbr: number) => {
          this.pageNumber = pageNbr;
          this.onSearch();
      }
    )
  }

  ngOnInit() {
    this.extMovieLibService.pageUpdated.subscribe()
  }

  onSearch(){
    this.extMovieLibService.search(this.movieTitle, this.pageNumber)
        .subscribe(
          res => {
            this.moviesSearched.emit(res);
          });
  }

}
