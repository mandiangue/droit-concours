import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionPageModule' },
  { path: 'action', loadChildren: './action/action.module#ActionPageModule' },
  { path: 'actes', loadChildren: './actes/actes.module#ActesPageModule' },
  { path: 'contentieux', loadChildren: './contentieux/contentieux.module#ContentieuxPageModule' },
  { path: 'fonction', loadChildren: './fonction/fonction.module#FonctionPageModule' },
  { path: 'organisation', loadChildren: './organisation/organisation.module#OrganisationPageModule' },
  { path: 'sommaire', loadChildren: './sommaire/sommaire.module#SommairePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
