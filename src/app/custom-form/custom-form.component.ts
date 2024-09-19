import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TestApiService } from '../test-api.service';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  formGroup!:FormGroup
  submitted = false;
  btndisabled: boolean = false;
  submittedFrom: string = '';
  fullUrl: string = '';


  

  constructor(
    private api:TestApiService, 
    private fb:FormBuilder, 
    private router: Router ,
    private toastr: ToastrService,
    private gaService: GoogleAnalyticsService
  ){
    const baseUrl = window.location.origin; // Protocol + domain
    this.submittedFrom = this.router.url;
    this.fullUrl = `${baseUrl}${this.submittedFrom}`; // Combine them for the full URL

 
  
  
    this.formGroup = this.fb.group({
      name : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      email : ['', [Validators.required]],
      message : ['', []],
      submittedFrom: [this.fullUrl], 
      
    })

    
  }
  
  get g() {
    return this.formGroup.controls;
  }
  
  submit(){
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    
  
  
  
    const contactdata = {
      name: this.g['name'].value,
      email: this.g['email'].value,
      phone: this.g['phone'].value,
      message: this.g['message'].value,
      submittedFrom: this.fullUrl 
    };
    this.btndisabled = true;
    this.submitted = true;


    this.api.post('contact/contactform', contactdata).subscribe((response:any)=>{
   
  
     if (response.status === 200) {
      this.btndisabled = false;
      // this.toastr.success(response.message, "Success");
      this.formGroup.reset();
      this.submitted = false;

       // Fire Google Analytics event
       this.gaService.event('form_submission', 'submit', 'contact_form');


      this.router.navigate(['/thankyou']);
  } else {
      // Handle the error case here if needed
      this.btndisabled = false;
      this.toastr.error("An error occurred. Please try again.", "Error");
  }
  
  
  },
  (error) => {
    this.toastr.error("Error submitting contact form", "Error");
    console.error("Error submitting contact form: ", error);
  
  }
  )
  }
}
