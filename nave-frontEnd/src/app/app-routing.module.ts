import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './nave/create.component';
import { DetailComponent } from './nave/detail.component';
import { ListComponent } from './nave/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'crear', component: CreateComponent},
  {path: 'detalle/:id', component: DetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
