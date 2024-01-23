import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialModule';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { StaffregistrationComponent } from './staffregistration/staffregistration.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { RegisterpatientComponent } from './Patient/registerpatient/registerpatient.component';
import { ViewpatientComponent } from './Patient/viewpatient/viewpatient.component';
import { DatarecordingComponent } from './Patient/datarecording/datarecording.component';
import { AppointmentComponent } from './Patient/appointment/appointment.component';
import { NotificationComponent } from './Patient/notification/notification.component';
import { NewpatientComponent } from './Patient/newpatient/newpatient.component';
import { AutismHomeComponent } from './autism-home/autism-home.component';
import { HomeAutismComponent } from './home-autism/home-autism.component';
import { NewpatientformComponent } from './Patient/newpatientform/newpatientform.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctordashboardComponent } from './Doctor/doctordashboard/doctordashboard.component';
import { DocappointmentComponent } from './Doctor/docappointment/docappointment.component';
import { DocdataComponent } from './Doctor/docdata/docdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    LoginComponent,
    RegisterComponent,
    PatientdashboardComponent,
    StaffdashboardComponent,
    StaffregistrationComponent,
    PatientregistrationComponent,
    RegisterpatientComponent,
    ViewpatientComponent,
    DatarecordingComponent,
    AppointmentComponent,
    NotificationComponent,
    NewpatientComponent,
    AutismHomeComponent,
    HomeAutismComponent,
    NewpatientformComponent,
    DoctordashboardComponent,
    DocappointmentComponent,
    DocdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
