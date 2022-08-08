import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/model/moviedata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  //Variáveis de filtragem
  yearfilter?: number = undefined;
  winner?: number = -1;

  //Variável de paginação
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
      pageSize: 15,
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
    size: 15,
  };

  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    //Inicializar listagem de filmes
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
    //Se o ano do filtro for menor que 1980 não existe a necessidade de contatar a API, pois não existem dados anteriores a este ano.
    if (this.yearfilter != undefined && this.yearfilter < 1980) {
      this.moviedata = {
        content: [],
        pageable: {
          sort: {
            sorted: false,
            unsorted: true,
            empty: true,
          },
          pageSize: 15,
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
        size: 15,
      };
      return;
    } else {
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
              pageSize: 15,
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
            size: 15,
          };
        }
      );
    }
  }
}
