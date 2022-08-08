import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Winneryears } from 'src/app/model/winneryears';
import { Interval } from '../model/interval';
import { MovieDatas, MovieData } from '../model/moviedata';
import { Studios } from '../model/studios';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  url = 'https://tools.texoit.com/backend-java/api/movies';

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  /* Pegar dados da listagem dos filmes*/
  getMovieData(page: number, size: number, winner?: boolean, year?: number) {
    return this.http.get<MovieData>(
      `${this.url}?page=${page}&size=${size}` +
        (winner != undefined && winner != null ? `&winner=${winner}` : '') +
        (year != undefined && year != null ? `&year=${year}` : '')
    );
  }

  /* Pegar anos com mais vencedores */
  getWinnersYear() {
    return this.http.get<Winneryears>(
      `${this.url}?projection=years-with-multiple-winners`
    );
  }

  /* Pegar estúdios com mais vitórias */
  getStudiosWithWinCount() {
    return this.http.get<Studios>(
      `${this.url}?projection=studios-with-win-count`
    );
  }

  /* Pegar os maiores e menores intervalos entre vencedores */
  getAwardsInterval() {
    return this.http.get<Interval>(
      `${this.url}?projection=max-min-win-interval-for-producers`
    );
  }

  /* Pegar vencedores pelo ano */
  getMoviesByYear(winner: boolean, year: number) {
    return this.http.get<MovieDatas[]>(
      `${this.url}?winner=${winner}&year=${year}`
    );
  }
}
