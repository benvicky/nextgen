import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Appointment } from 'src/app/Model/appointment';
import { DocAppointmentService } from 'src/app/Services/doc-appointment.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  constructor(
    private _formbuilder: FormBuilder,
    private docAppointmentservice: DocAppointmentService,
    private _snackbar: SnackBarService
  ) {}

  docAppointmentform = this._formbuilder.group({
    fullname: this._formbuilder.control('', Validators.required),
    olddate: this._formbuilder.control(''),
    newdate: this._formbuilder.control('', Validators.required),
    treatment: this._formbuilder.control(''),
    monitoring: this._formbuilder.control(''),
  });

  createappointment() {
    const postData = { ...this.docAppointmentform.value };
    this.docAppointmentservice
      .addAppointment(postData as Appointment).subscribe(
        response => {
          this._snackbar.openSnackBar('Appointment Created Successfully');
        },
        error => {
          this._snackbar.openSnackBar('Please enter valid data');
        }
      );
  }
}
