import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private router: Router, private builder: FormBuilder) {} 
  
  redirectToStaffRegistration() {
    this.router.navigate(['/staffregistration']);
  }

  redirectToPatientRegistration() {
    this.router.navigate(['/patientregistration'])
  }


  registerform=this.builder.group({
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
    confirmpassword: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  })

  proceedRegister() {
    if(this.registerform.valid) {
      
    }
  }
}
