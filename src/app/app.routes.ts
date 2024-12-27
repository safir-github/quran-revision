import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SourateDetailComponent } from './component/sourate-detail/sourate-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'sourate/:id', component: SourateDetailComponent }, // Route pour les détails d'une sourate
  { path: '**', redirectTo: '' } // Redirection pour les pages non trouvées
];
