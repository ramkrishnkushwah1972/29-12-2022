import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fullName:['',Validators.required],
      userName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      acceptTerms:[false,Validators.requiredTrue]
      
    })
  }

  registerForm!:FormGroup
  submitted = false;

  onSubmit()
  { 
    this.submitted= true

    if(this.registerForm.invalid){
      return
    }
    alert("Success");
    // console.warn(this.profileForm.value);
  }
}
