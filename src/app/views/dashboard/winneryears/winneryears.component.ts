import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Winneryears } from 'src/app/model/winneryears';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-winneryears',
  templateUrl: './winneryears.component.html'
})
export class WinneryearsComponent implements OnInit {

  //Variáveis de filtragem
  yearfilter?: number;

  //Listagens dos quadros
  winnerYears? : Winneryears = {years: []};

  constructor(private MoviesService : MoviesService) { }

  ngOnInit(): void {
    //Iniciar quadro de anos com múltiplos vencedores
    this.MoviesService.getMultipleWinnersYear().subscribe(
      retorno=>{
        this.winnerYears = retorno;
      }, error=>{
        console.log(error);
      }
    )
  }

}
