import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'login',
    // pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'home',
    // pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    // pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'roles',
    // pathMatch: 'full',
    component: RolesComponent
  },
  {
    path: 'users',
    // pathMatch: 'full',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
