import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/Model/appointment';
import { DocAppointmentService } from 'src/app/Services/doc-appointment.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';

@Component({
  selector: 'app-docappointment',
  templateUrl: './docappointment.component.html',
  styleUrls: ['./docappointment.component.css'],
})
export class DocappointmentComponent implements OnInit {
  docAppointmentdata!: Appointment[];
  dataSource: any;
  displayColumns: string[] = [
    'id',
    'fullname',
    'olddate',
    'newdate',
    'treatment',
    'monitoring',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private docappointmentservice: DocAppointmentService,
    private _snackbar: SnackBarService
  ) {
    this.docappointmentservice.getAppointment().subscribe((response) => {
      this.docAppointmentdata = response;
      this.dataSource = new MatTableDataSource<Appointment>(
        this.docAppointmentdata
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
    this.getAppointment();
  }

  filter(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  deleteAppointment(id: number) {
    this.docappointmentservice.deleteAppointment(id).subscribe({
      next: (response) => {
        this._snackbar.openSnackBar('Appointment deleted', 'Ok');
        this.getAppointment();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAppointment() {
    this.docappointmentservice.getAppointment().subscribe((response) => {
      this.docAppointmentdata = response;
      this.dataSource = new MatTableDataSource<Appointment>(
        this.docAppointmentdata
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
