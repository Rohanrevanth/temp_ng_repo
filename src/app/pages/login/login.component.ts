import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading : boolean = false

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(
    public authService: AuthService, 
    public router: Router,
  ) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.emailFormControl)
    console.log(this.emailFormControl.value)
    this.isLoading = true;

    var email = this.emailFormControl.value;
    var password = this.passwordFormControl.value;

    var body = {
      base64 : btoa(email + ":" + password)
    }

    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 2000);


    this.authService.login(body)
      .subscribe((res : any) => {
        console.log(res);
      },
      (err : any) => {
        console.log(err);
        // this.isLoading = false;
      })
  }

}
