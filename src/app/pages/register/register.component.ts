import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  newUser!: UserI;

  constructor(private form: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      username: ["", Validators.required],
      mail: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]],
      role: ["user"]
    });

    this.registerForm.valueChanges.subscribe((changes) => {
      this.newUser = changes;
    })
  }

  onSubmit() {
    this.submitted= true;
    if(this.registerForm.valid){
      console.log(this.newUser);
      this.authService.register(this.newUser).subscribe((data: any) => {
        console.log(data);
        this.submitted = false;
        this.registerForm.reset();
        this.router.navigate(['/']);
      })
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
