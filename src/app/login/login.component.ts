import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from '../Services/snack-bar.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private builder: FormBuilder,
    private service: AuthService, private _snackbar: SnackBarService) { 
      sessionStorage.clear();
    }

  userdata: any;
  staffdata: any;
  responsedata: any

  // Staff login
  stafflogin = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  // proceedstafflogin() {
  //   this.service.GetAllStaffbyid(this.stafflogin.value.username).subscribe(res => {
  //     this.staffdata = res;
  //     console.log(this.staffdata);
  
  //     if (this.staffdata && this.staffdata.password === this.stafflogin.value.password) {
  //       sessionStorage.setItem('username', this.staffdata.id);
  //       this.router.navigate(['staffdashboard']);
  //     } else {
  //       this._snackbar.openSnackBar('Invalid Credentials');
  //     }
  //   });
  // }

  // proceedstafflogin() {
  //   if (this.stafflogin.valid){
  //     this.service.proceedstafflogin(this.stafflogin.value).subscribe(result =>{
  //       if (result!=null){
  //         this.responsedata = result;
  //         localStorage.setItem('token', this.responsedata.jwtToken);
  //         this.router.navigate(['staffdashboard'])
  //       }
  //     })
  //   }
  // }

  Stafflogin(){
    const {username, password} = this.stafflogin.value;
    this.service.getStaffbyUsername(username as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('username', username as string)
          this.router.navigate(['staffdashboard']);
        }else {
          this._snackbar.openSnackBar('Please enter valid data')
        }
      },
      error => {
        this._snackbar.openSnackBar('Something went wrong')
      }
    )
  }
  


  //User login 
  userlogin = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  // proceeduserlogin() {
  //   if (this.userlogin.valid){
  //     this.service.proceeduserlogin(this.userlogin.value).subscribe(result =>{
  //       if (result!=null){
  //         this.responsedata = result;
  //         localStorage.setItem('token', this.responsedata.jwtToken);
  //         this.router.navigate(['patientdashboard'])
  //       }
  //     })
  //   }
  // }

  Userlogin(){
    const {username, password} = this.userlogin.value;
    this.service.getUserbyUsername(username as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('username', username as string)
          this.router.navigate(['patientdashboard']);
        }else {
          this._snackbar.openSnackBar('Please enter valid data')
        }
      },
      error => {
        this._snackbar.openSnackBar('Something went wrong')
      }
    )
  }
 

  redirecttoRegister() {
    this.router.navigate(['/register'])
  }
}
