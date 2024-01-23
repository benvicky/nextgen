import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from '../Services/snack-bar.service';
import { AuthService } from '../Services/auth.service';
import { Users } from '../Model/user';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent {
  
  constructor(private router: Router, private builder: FormBuilder, 
    private service: AuthService ,private _snackbar: SnackBarService) {} 


  registerpatientform=this.builder.group({
    name: this.builder.control('', Validators.required),
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
    // confirmpassword: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  })

  proceedPatientRegister() {
    if(this.registerpatientform.valid) {
      this.service.proceedPatientRegistration(this.registerpatientform.value).subscribe(response =>{
        this._snackbar.openSnackBar('Registered Succesfully')
        this.router.navigate(['/login']);
      })
    }else{
      this._snackbar.openSnackBar('Please enter valid data')
    }
  }

  regUserdetails(){
    const postData = { ...this.registerpatientform.value};
    this.service.registerUsers(postData as Users).subscribe(
      response => {
        console.log(response);
        this._snackbar.openSnackBar('Registered Succesfully')
        this.router.navigate(['/login']);
      },
      error => {
        this._snackbar.openSnackBar('Please enter valid data')
      }
    )
  }



  redirecttoHome() {
    this.router.navigate([''])
  }
}
