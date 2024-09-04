import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-website-development',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.css'
})
export class WebsiteDevelopmentComponent {

}
