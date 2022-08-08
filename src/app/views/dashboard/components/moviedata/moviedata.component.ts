import { Component, OnInit } from '@angular/core';
import { MovieDatas } from 'src/app/model/moviedata';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedata',
  templateUrl: './moviedata.component.html'
})
export class MoviedataComponent {

  yearfilter?: number;
  byyear? : MovieDatas[] = [];

  constructor(private moviesService : MoviesService) { }

  /*Busca por vencedores pelo ano*/
  searchByYear(){
    //Caso o ano buscado seja inferior à 1980 não existe a necessidade de contatar a API, pois não existem registros anteriores à 1980
    if(this.yearfilter != null && this.yearfilter >= 1980){
      this.moviesService.getMoviesByYear(true, this.yearfilter).subscribe(
        retorno=>{
          this.byyear = retorno;
        }
      )
    }else{
      this.yearfilter = undefined;
      this.byyear = [];
    }
  }

}

