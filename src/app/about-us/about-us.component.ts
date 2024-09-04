import { Component } from '@angular/core';
import { ModalFormComponent } from "../modal-form/modal-form.component";
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ModalFormComponent,CustomFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
