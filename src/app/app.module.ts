import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FilmesComponent } from './views/filmes/filmes.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { IntervalComponent } from './views/dashboard/interval/interval.component';
import { MoviedataComponent } from './views/dashboard/moviedata/moviedata.component';
import { StudiosComponent } from './views/dashboard/studios/studios.component';
import { WinneryearsComponent } from './views/dashboard/winneryears/winneryears.component';
import { AboutComponent } from './views/about/about.component';
import { GalleryComponent } from './views/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FilmesComponent,
    IntervalComponent,
    MoviedataComponent,
    StudiosComponent,
    WinneryearsComponent,
    AboutComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
