import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferComponent } from './transfer/transfer.component';

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
    path: 'TransferList',
    component: TransferListComponent,
    canActivate: [AuthGuard]
},
{
    path: 'Transfer',
    component: TransferComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
