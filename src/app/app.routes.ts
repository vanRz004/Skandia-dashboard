import { Routes } from '@angular/router';

import { CardsListComponent } from './features/cards/components/cards-list/cards-list';

export const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: '**', redirectTo: '' }
];