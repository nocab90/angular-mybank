import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'account-info', component: AccountInfoComponent},
  {path: 'view-profile', component:ViewProfileComponent},
  // {path: '', redirectTo: '/', pathMatch:'full'}
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
