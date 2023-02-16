import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  loginError:boolean = false;
  errorMessage: string = 'Wrong username or password';

  constructor(private location: Location){

  };

  login(){
    if (this.username == 'test' && this.password == 'test') {
      console.log('Login Successful!');
    } else {
      this.loginError = true;
    }
  }

  back(): void {
    this.location.back();
  }
}
