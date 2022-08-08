import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Interval } from 'src/app/model/interval';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html'
})
export class IntervalComponent implements OnInit {

  interval? : Interval = {min: [], max: []};

  constructor(private MoviesService : MoviesService) { }

  ngOnInit(): void {

    //Inicia carregamento dos maiores e menores intervalos entre vencedores
    this.MoviesService.getAwardsInterval().subscribe(
      retorno=>{
        this.interval = retorno;
      }, error=>{
        console.log(error);
      }
    )
  }



}
