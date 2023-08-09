import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  user!: UserI;

  constructor(private form: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnIni() : void {
    this.loginForm = this.form.group({
      username: ["", Validators.required],
      mail: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
    });

    this.loginForm.valueChanges.subscribe((changes) => {
      this.user = changes;
    })
  }

  onSubmit() {
    this.submitted= true;
    if(this.loginForm.valid){
      //
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.loginForm.reset();
  }
}
