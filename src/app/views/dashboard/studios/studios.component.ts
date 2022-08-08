import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Studios } from 'src/app/model/studios';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html'
})
export class StudiosComponent implements OnInit {

  studios? : Studios = {studios:[]};

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {

    //Iniciar quadro de estudios com múltiplas vitórias
    this.moviesService.getStudiosWithWinCount().subscribe(
      retorno=>{
        this.studios = retorno;
      }, error=>{
        console.log(error);
      }
    )

  }

}
