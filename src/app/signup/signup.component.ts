import { Component, OnInit } from '@angular/core';
import { Signup } from '../../assets/json/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new Signup();
  error = false;
  constructor() {}

  ngOnInit() {
    this.showSignupModal();
  }

  showSignupModal(): void {
    const element: HTMLElement = document.getElementById(
      'triggerSignup'
    ) as HTMLElement;
    element.click();
  }
}
