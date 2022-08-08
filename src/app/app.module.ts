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
import { FilmsComponent } from './views/films/films.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { IntervalComponent } from './views/dashboard/components/interval/interval.component';
import { MoviedataComponent } from './views/dashboard/components/moviedata/moviedata.component';
import { StudiosComponent } from './views/dashboard/components/studios/studios.component';
import { WinneryearsComponent } from './views/dashboard/components/winneryears/winneryears.component';
import { AboutComponent } from './views/about/about.component';
import { NavComponent } from './layouts/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FilmsComponent,
    IntervalComponent,
    MoviedataComponent,
    StudiosComponent,
    WinneryearsComponent,
    AboutComponent,
    NavComponent,
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
