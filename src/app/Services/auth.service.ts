import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff, Users } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,  private router: Router) { }

  GetAllPatient(){
    return this.http.get('http://localhost:3000/Users')
  }

  GetAllPatientbyid(id: any){
    return this.http.get(`http://localhost:3000/Users/${id}`)
  }

  proceedPatientRegistration(data: any) {
    return this.http.post('http://localhost:3000/Users', data)
  }

  // staff registration
  GetAllStaff(){
    return this.http.get('http://localhost:3000/staffregistration')
  }

  GetAllStaffbyid(id: any){
    return this.http.get(`http://localhost:3000/staffregistration/${id}`)
  }
  

  // proceedstafflogin(id:any){
  //   return this.http.get('http://localhost:3000/staffregistration' + '/' + id)
  // }

  // proceedstafflogin(username: any) {
  //   return this.http.get(`http://localhost:3000/staffregistration?username=${username}`);
  // }

  // proceedstafflogin(username: any) {
  //   const loginData = { username: username };
  //   return this.http.post('http://localhost:3000/staffregistration/login', loginData);
  // }
  apiurl = 'http://localhost:3000/staffregistration';
  proceedstafflogin(data: any) {
    return this.http.post(this.apiurl, data)
  }

  apiurl1 = 'http://localhost:3000/usersregistration';
  proceeduserlogin(data: any) {
    return this.http.post(this.apiurl1, data)
  }

  proceedStaffRegistration(data: any) {
    return this.http.post('http://localhost:3000/staffregistration', data)
  }

  isLoggedIn() {
    return sessionStorage.getItem('username')!=null
  }

  //Login and Registration

 url = 'http://localhost:3000' 

registerStaff(staffdetails: Staff){
  return this.http.post(`${this.url}/Staff`, staffdetails)
}

getStaffbyUsername(username: string): Observable<Staff[]> {
  return this.http.get<Staff[]>(`${this.url}/Staff?username=${username}`);
}

registerUsers(userdetails: Users){
  return this.http.post(`${this.url}/Users`, userdetails)
}

getUserbyUsername(username: string): Observable<Users[]> {
  return this.http.get<Users[]>(`${this.url}/Users?username=${username}`);
}



}
