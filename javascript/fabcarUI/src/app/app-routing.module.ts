import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { InvokeComponent } from './invoke/invoke.component';



const routes: Routes = [
  { path: '',   redirectTo: '/query', pathMatch: 'full' },
  {path: 'query', component: QueryComponent},
  {path: 'invoke', component: InvokeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

