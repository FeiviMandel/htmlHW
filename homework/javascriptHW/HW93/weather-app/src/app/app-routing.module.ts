import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/weather.component'
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [{
  path: 'weather',
  component: WeatherComponent
},
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
