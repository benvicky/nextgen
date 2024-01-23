import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from 'src/app/Services/patient.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';

@Component({
  selector: 'app-newpatientform',
  templateUrl: './newpatientform.component.html',
  styleUrls: ['./newpatientform.component.css'],
})
export class NewpatientformComponent implements OnInit{
  newpatientform: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private patientservice: PatientService,
    private dialogueRef: DialogRef<NewpatientformComponent>,
    private _snackbar: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newpatientform = this._formbuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      healthinsurancenumber: '',
      contact: '',
    });
  }
  ngOnInit(): void {
    this.newpatientform.patchValue(this.data);
  }

  newpatientformsubmit() {
    if (this.newpatientform.valid) {
      if(this.data) {
        this.patientservice.updatePatientdata(this.data.id, this.newpatientform.value).subscribe({
          next: (val: any) => {
            this._snackbar.openSnackBar('Patient data Updated', 'OK');
            this.dialogueRef.close();
          },
  
          error: (err: any) => {
            console.log(err);
          },
        });
      }else {
        this.patientservice.addPatient(this.newpatientform.value).subscribe({
          next: (val: any) => {
            this._snackbar.openSnackBar('New Patient Created', 'Done');
            this.dialogueRef.close();
          },
  
          error: (err: any) => {
            console.log(err);
          },
        });
      }
      
    }
  }
}
