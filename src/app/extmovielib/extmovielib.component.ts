import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extmovielib',
  templateUrl: './extmovielib.component.html',
  styleUrls: ['./extmovielib.component.css']
})
export class ExtmovielibComponent implements OnInit {

  selectedMovies;

  ngOnInit() {
  }

  onMoviesSearched(movies){
    this.selectedMovies = movies;
  }
}
