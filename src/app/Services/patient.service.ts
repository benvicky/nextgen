import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  addPatient(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/patient', data);
  }

  getPatientdata(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:3000/patient');
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/patient/${id}`);
  }

  updatePatientdata(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/patient/${id}`, data)
  }

}
