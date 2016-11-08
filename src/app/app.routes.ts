import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { RequirementsComponent } from './requirements';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'requirements', component: RequirementsComponent },
];
