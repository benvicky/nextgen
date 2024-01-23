import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router from Angular

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent {
  badgevisible = false;

  constructor(private router: Router) {} // Inject the Router in the constructor

  badgevisibilty() {
    this.badgevisible = true;
  }

  redirectToNewPatient() {
    this.router.navigate(['patientdashboard/new-patient']); // Navigate to the 'new-patient' route
  }

  redirectToViewPatient() {
    this.router.navigate(['patientdashboard/view-patient']);
  }

  redirectToViewDataRecording() {
    this.router.navigate(['patientdashboard/patientdata']);
  }

  redirectToViewMakeAppointment() {
    this.router.navigate(['patientdashboard/makeappointment']);
  }

  redirectToViewNotification() {
    this.router.navigate(['patientdashboard/notification']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}

