import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSpptComponent } from './list-sppt/list-sppt.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'list-sppt/:nop', component: ListSpptComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
