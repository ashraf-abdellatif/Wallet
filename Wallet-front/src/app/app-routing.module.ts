import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
},
{
    path: 'Login',
    component: LoginComponent
},
{
    path: 'Register',
    component: RegisterComponent
}
,
{
    path: 'Transfer',
    component: TransferListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
