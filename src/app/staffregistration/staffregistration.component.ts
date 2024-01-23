import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { SnackBarService } from '../Services/snack-bar.service';
import { Staff } from '../Model/user';

@Component({
  selector: 'app-staffregistration',
  templateUrl: './staffregistration.component.html',
  styleUrls: ['./staffregistration.component.css']
})
export class StaffregistrationComponent {
  constructor(private router: Router, private builder: FormBuilder, 
    private service: AuthService ,private _snackbar: SnackBarService) {} 


  registerstaffform=this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    license: this.builder.control('', Validators.required),
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
  })

  // proceedStaffRegister() {
  //   if(this.registerstaffform.valid) {
  //     this.service.proceedStaffRegistration(this.registerstaffform.value).subscribe(response =>{
  //       this._snackbar.openSnackBar('Registered Succesfully')
  //       this.router.navigate(['/login']);
  //     })
  //   }else{
  //     this._snackbar.openSnackBar('Please enter valid data')
  //   }
  // }

    regStaffdetails(){
      const postData = { ...this.registerstaffform.value};
      this.service.registerStaff(postData as Staff).subscribe(
        response => {
          console.log(response);
          this._snackbar.openSnackBar('Registered Succesfully')
          this.router.navigate(['/login']);
        },
        error => {
          this._snackbar.openSnackBar('Please enter valid data')
        }
      )
    };

  redirecttoHome() {
    this.router.navigate([''])
  }

}
