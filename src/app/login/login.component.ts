import { Component, OnInit } from '@angular/core';
import { Login } from '../../assets/json/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  loginUsers: Login[];
  error = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.showLoginModal();
  }

  showLoginModal(): void {
    const element: HTMLElement = document.getElementById(
      'triggerLogin'
    ) as HTMLElement;
    element.click();
  }

  onLogin() {
    const email = this.login.email;
    const password = this.login.password;
    if (email === 'naveen@infy.com' && password === 'naveen') {
      console.log('Login Successfull!');
      const element: HTMLElement = document.getElementById(
        'closeBtn'
      ) as HTMLElement;
      element.click();
    } else {
      console.log('Login Failure!');
      this.error = true;
    }
  }
}
