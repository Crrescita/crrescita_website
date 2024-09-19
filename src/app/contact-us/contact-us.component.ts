import { Component } from '@angular/core';
import { TestApiService } from '../test-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,ModalFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formGroup!:FormGroup
  

constructor(
  private api:TestApiService, 
  private fb:FormBuilder, 
  private router: Router ,
  private toastr: ToastrService,
  private gaService: GoogleAnalyticsService
){


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
  console.log('Submit method called');

  if (this.formGroup.invalid) {
    this.formGroup.markAllAsTouched();
    return;
  }

  // Get the current URL from which the form is being submitted
  const submittedFrom = this.router.url;
  console.log('Submitted From URL:', submittedFrom);


  // Capture the referrer URL (the page from which the user navigated to contact page)
  const referrer = document.referrer || 'Direct traffic'; 
  console.log('Referrer URL:', referrer);
   // 'Direct traffic' if no referrer

  const contactdata = {
    name: this.g['name'].value,
    email: this.g['email'].value,
    phone: this.g['phone'].value,
    message: this.g['message'].value,
    submittedFrom: submittedFrom ,
    referrer: referrer       
   
  };

  console.log('Contact Data:', contactdata);



  
  this.api.post('contact/contactform', contactdata).subscribe((response:any)=>{
  //  console.log(response)

   if (response.status === 200) {
    this.toastr.success(response.message, "Success");
    this.formGroup.reset();
        // Fire Google Analytics event
        this.gaService.event('contact_us_form_submission', 'submit', 'contact_form');

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
}


trackButtonClick() {
  this.gaService.event('contact_us_get_started_btn', 'user_interaction', 'Contact us');
}

trackButtonFooterGetStarted() {
  this.gaService.event('contact_us_footer_get_started_btn', 'user_interaction', 'Contact us');
}


}
