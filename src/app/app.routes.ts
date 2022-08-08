import { Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { FilmsComponent } from "./views/films/films.component";
import { AboutComponent } from "./views/about/about.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'about', component: AboutComponent}
];
