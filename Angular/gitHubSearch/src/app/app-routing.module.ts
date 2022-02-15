import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  { path: 'Search', component: SearchComponent},
  { path: 'Repositories', component: RepositoriesComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/Home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
