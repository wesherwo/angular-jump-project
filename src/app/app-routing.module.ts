import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent } from 'src/app/components/homepage/homepage.component'
import {YtlobbyComponent} from 'src/app/components/ytlobby/ytlobby.component'
import {AboutusComponent} from 'src/app/components/aboutus/aboutus.component'
const routes: Routes = [
  { path: '', redirectTo: '/homepage' , pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'ytlobby', component: YtlobbyComponent },
  { path: 'aboutus', component: AboutusComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, YtlobbyComponent, AboutusComponent]