import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-website-development',
  standalone: true,
  imports: [CustomFormComponent],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.css'
})
export class WebsiteDevelopmentComponent {

}
