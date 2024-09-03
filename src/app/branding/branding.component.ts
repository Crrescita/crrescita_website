import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CustomFormComponent],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {

}
