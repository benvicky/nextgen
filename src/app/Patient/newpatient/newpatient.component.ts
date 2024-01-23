import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewpatientformComponent } from '../newpatientform/newpatientform.component';


@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent {


  constructor(private _dialog: MatDialog) {}

  openNewPatientForm() {
    this._dialog.open(NewpatientformComponent);
  }
}
