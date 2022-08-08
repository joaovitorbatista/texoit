import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/model/moviedata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {

  yearfilter?: number = undefined;
  winner?: number = -1;

  tablepage?: number;

  //Listagem de filmes
  moviedata: MovieData = {
    content: [],
    pageable: {
      sort: {
        sorted: false,
        unsorted: true,
        empty: true,
      },
      pageSize: 10,
      pageNumber: 0,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    totalElements: 0,
    last: false,
    totalPages: 1,
    first: false,
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    number: 0,
    numberOfElements: 0,
    size: 10,
  };

  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    //Carregar listagem de filmes
    this.MoviesService.getMovieData(
      this.moviedata.pageable.pageNumber,
      this.moviedata.size
    ).subscribe(
      (retorno) => {
        this.moviedata = retorno;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterTable() {

      this.MoviesService.getMovieData(
        this.moviedata.pageable.pageNumber,
        this.moviedata.size,
        this.winner == 0 ? false : this.winner == 1 ? true : undefined,
        this.yearfilter
      ).subscribe(
        (retorno) => {
          this.moviedata = retorno;
        },
        (error) => {
          console.log(error);
          this.moviedata = {
            content: [],
            pageable: {
              sort: {
                sorted: false,
                unsorted: true,
                empty: true,
              },
              pageSize: 10,
              pageNumber: 0,
              offset: 0,
              paged: true,
              unpaged: false,
            },
            totalElements: 0,
            last: false,
            totalPages: 1,
            first: false,
            sort: {
              sorted: false,
              unsorted: true,
              empty: true,
            },
            number: 0,
            numberOfElements: 0,
            size: 10,
          };
        }
      );
  }
}
