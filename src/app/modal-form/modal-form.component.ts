import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { TestApiService } from '../test-api.service';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
   bootstrap: any;

  formGroup!:FormGroup
  submitted = false;
  btndisabled: boolean = false;
  

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
    this.btndisabled = true;
    this.submitted = true;


    this.api.post('contact/contactform', contactdata).subscribe((response:any)=>{
    //  console.log(response)
  
     if (response.status === 200) {
      this.btndisabled = false;
      // this.toastr.success(response.message, "Success");
      this.formGroup.reset();
      this.submitted = false;

      this.toastr.success("thankyou for contact us our team will reach you", "success");
        
        //  setTimeout(() => {
        //   this.router.navigate(['/thankyou']);
        // });
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
  closeModal() {
    // Assuming your modal has the ID 'exampleModal'
    const modalElement = document.getElementById('contactModal');
    if (modalElement) {
      const modal = new this.bootstrap.Modal(modalElement);
      modal.hide();
    }
  }
}


