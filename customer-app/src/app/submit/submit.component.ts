import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

      this.submitForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      address:['',Validators.required],
      zipCode:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required]
      
      
    })
  }

  submitForm!:FormGroup
  submitted = false;

  onSubmit()
  { 
    this.submitted= true

    if(this.submitForm.invalid){
      return
    }
    alert("Success");

  }

}
