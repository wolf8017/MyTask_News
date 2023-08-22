import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {HomesComponent} from "./homes/homes.component";
import {DetailsNewsComponent} from "./news/details-news/details-news.component";
import {AddNewsComponent} from "./news/add-news/add-news.component";

const routes: Routes = [
  {
    path:'home',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'news',
    component: NewsComponent,
    title:'News'
  },
  {
    path: '',
    component: HomesComponent,
    title: 'Trang chủ'
  },
  {
    path: 'details/:id',
    component: DetailsNewsComponent,
  },
  {
  path:'add-news',
    pathMatch:'full',
    component: AddNewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
