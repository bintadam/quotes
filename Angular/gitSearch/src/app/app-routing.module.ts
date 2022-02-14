import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Repositories', component: RepositoriesComponent},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
