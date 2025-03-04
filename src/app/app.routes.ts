import { Routes } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component';
import { HomeComponent } from './pages/home/home.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'labs', component: LabsComponent },
  { path: '**', component: NoFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
