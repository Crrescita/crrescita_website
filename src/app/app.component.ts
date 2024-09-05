import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,CustomFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crrescita_angular';
  constructor(private router: Router, private gaService: GoogleAnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.gaService.pageView(event.urlAfterRedirects);  // Track page view
      }
    });
  }
}
