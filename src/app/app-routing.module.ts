import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewuserComponent } from './components/newuser/newuser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
