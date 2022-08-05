import { Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { FilmesComponent } from "./views/filmes/filmes.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'filmes', component: FilmesComponent}
];
