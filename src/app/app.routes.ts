import { Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { FilmesComponent } from "./views/filmes/filmes.component";
import { AboutComponent } from "./views/about/about.component";
import { GalleryComponent } from "./views/gallery/gallery.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'films', component: FilmesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'gallery', component: GalleryComponent}
];
