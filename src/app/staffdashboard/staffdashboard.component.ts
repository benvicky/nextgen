import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent {
  badgevisible = false;

  constructor(private router: Router) {}

  badgevisibilty() {
    this.badgevisible = true;
  }

  redirectToDocDashboard() {
    this.router.navigate(['staffdashboard/doctordashboard']);
  }
  redirectToViewPatient() {
    this.router.navigate(['staffdashboard/patient-records']);
  }
  redirectToViewAppointment() {
    this.router.navigate(['staffdashboard/doc-notification']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
