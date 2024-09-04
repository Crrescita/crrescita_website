import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css'
})
export class DigitalMarketingComponent {

}
