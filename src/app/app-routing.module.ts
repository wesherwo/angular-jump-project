import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YtlobbyComponent } from 'src/app/components/ytlobby/ytlobby.component';
import { JoinlobbyComponent } from 'src/app/components/joinlobby/joinlobby.component';

const routes: Routes = [
  { path: '', redirectTo: '/joinlobby', pathMatch: 'full' },
  { path: 'joinlobby', component: JoinlobbyComponent },
  { path: 'ytlobby', component: YtlobbyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
