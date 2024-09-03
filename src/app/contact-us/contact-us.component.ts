import { Component } from '@angular/core';
import { TestApiService } from '../test-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formGroup!:FormGroup
  

constructor(
  private api:TestApiService, 
  private fb:FormBuilder, 
  private router: Router ,
  private toastr: ToastrService){


  this.formGroup = this.fb.group({
    name : ['', [Validators.required]],
    phone : ['', [Validators.required]],
    email : ['', [Validators.required]],
    message : ['', []]
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
  };
  this.api.post('contact/contactform', contactdata).subscribe((response:any)=>{
   console.log(response)

   if (response.status === 200) {
    this.toastr.success(response.message, "Success");
    this.formGroup.reset();
    this.router.navigate(['/thankyou']);
} else {
    // Handle the error case here if needed
    this.toastr.error("An error occurred. Please try again.", "Error");
}


},
(error) => {
  this.toastr.error("Error submitting contact form", "Error");
  console.error("Error submitting contact form: ", error);

}
)
}}
