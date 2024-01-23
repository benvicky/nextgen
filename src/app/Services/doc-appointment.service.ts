import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Model/appointment';


@Injectable({
  providedIn: 'root'
})
export class DocAppointmentService {

  constructor( private http: HttpClient) { }

  addAppointment(data: Appointment) {
    return this.http.post('http://localhost:3000/docAppointment', data);
  }
  getAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:3000/docAppointment');
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/docAppointment/${id}`);
  }

  updateAppointment(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/docAppointment/${id}`, data)
  }
  
}
