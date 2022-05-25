import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'home', component: MainPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: '**', redirectTo: 'home'}
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
