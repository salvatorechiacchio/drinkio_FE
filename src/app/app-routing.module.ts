import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavigationPage } from './navigation/navigation.page';
import { SearchPage } from './search/search.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationPageModule),
  },  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
