import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.ls.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
