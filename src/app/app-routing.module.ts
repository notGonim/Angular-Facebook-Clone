import { HomeComponent } from './../../../../angularPractice/src/app/home/home.component';
import { FacebookGuard } from './guards/facebook.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    canActivate: [FacebookGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
