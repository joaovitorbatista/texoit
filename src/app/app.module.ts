import { rootRouterConfig } from './app.routes';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/header/nav/nav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AnoMaisVencedoresComponent } from './views/dashboard/ano-mais-vencedores/ano-mais-vencedores.component';
import { EstudioMaisVitoriasComponent } from './views/dashboard/estudio-mais-vitorias/estudio-mais-vitorias.component';
import { IntervaloVitoriasComponent } from './views/dashboard/intervalo-vitorias/intervalo-vitorias.component';
import { ListaFilmesAnoComponent } from './views/dashboard/lista-filmes-ano/lista-filmes-ano.component';
import { FilmesComponent } from './views/filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    AnoMaisVencedoresComponent,
    EstudioMaisVitoriasComponent,
    IntervaloVitoriasComponent,
    ListaFilmesAnoComponent,
    FilmesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
