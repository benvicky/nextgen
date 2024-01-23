import { NgModule } from "@angular/core";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
exports:[
    MatInputModule, MatFormFieldModule, FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule, MatListModule,
    MatCardModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule,
    MatDialogModule,MatSnackBarModule, 
    ReactiveFormsModule,
    FlexLayoutModule
]

})
export class MaterialModule{}