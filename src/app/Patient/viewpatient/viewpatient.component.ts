import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';
import { NewpatientformComponent } from '../newpatientform/newpatientform.component';
import { SnackBarService } from 'src/app/Services/snack-bar.service';



@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css'],
})
export class ViewpatientComponent implements OnInit {
  patientdata!: Patient[];
  dataSource: any;
  displayColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'healthinsurancenumber',
    'contact',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private patientservice: PatientService,
    private _snackbar: SnackBarService
  ) {
    this.patientservice.getPatientdata().subscribe((response) => {
      this.patientdata = response;
      this.dataSource = new MatTableDataSource<Patient>(this.patientdata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
    this.getPatientdata();
  }

  filter(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  deletePatient(id: number) {
    this.patientservice.deletePatient(id).subscribe({
      next: (response) => {
        this._snackbar.openSnackBar('Patient deleted', 'Ok');
        this.getPatientdata();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //Edit patient form
  openeditpatientform(data: any) {
    const DialogRef = this.dialog.open(NewpatientformComponent, {
      data,
    });

    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientdata();
          window.location.reload();
        }
      },
    });
  }

  //   getPatientdata() {
  //     this.patientservice.getPatientdata().subscribe({
  //       next: (response) =>{
  //         console.log(response)
  //       },

  //       error: (err) => {
  //         console.log(err)
  //       }
  //     })
  //   }

  getPatientdata() {
    this.patientservice.getPatientdata().subscribe({
      next: (response) => {
        this.patientdata = response;
        this.dataSource = new MatTableDataSource<Patient>(this.patientdata);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
