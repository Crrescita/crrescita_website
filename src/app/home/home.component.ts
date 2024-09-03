import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
