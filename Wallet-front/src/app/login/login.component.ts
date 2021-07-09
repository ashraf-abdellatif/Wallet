import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateModel } from '../AuthenticateModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }
  authenticateModel:AuthenticateModel = {Username:'' , Password:''};
  ngOnInit(): void {
  }
  submit()
  {
    this.userService.Login(this.authenticateModel).subscribe(
      data=>{
        let user:any = data;
        localStorage.setItem('userid' ,user.id);
        localStorage.setItem('isAdmin' ,user.isAdmin);
        this.router.navigate(['/Transfer']);
      },
      error=>{
        localStorage.setItem('userid' ,'0');
        localStorage.setItem('isAdmin' ,'false');

      }
    )
  }

}
