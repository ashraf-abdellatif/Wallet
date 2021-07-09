import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../UserModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:UserModel  = { UserName:'' , Password:'' , ConfirmPassword:'' , Mobile:'' };
  ngOnInit(): void {
  }

  submit():void{
    this.userService.Register(this.user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
