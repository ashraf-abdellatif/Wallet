import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from '../UserModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }
  user:UserModel  = { UserName:'' , Password:'' , ConfirmPassword:'' , Mobile:'' };
  ngOnInit(): void {
  }

  submit():void{
    if(!this.ValidateForm())
    {
      console.log('bad data');
      return;
    }
    this.userService.Register(this.user).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['']);
      },
      error=>{
        console.log(error);
      }
    )
  }
  ValidateForm()
  {
    if(this.user.UserName == '' || this.user.Mobile == '' || this.user.Password == '' || this.user.ConfirmPassword=='' || this.user.Password != this.user.ConfirmPassword)
    return false;
    return true;
  }
}
