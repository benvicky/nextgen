import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StaffregistrationComponent } from './staffregistration/staffregistration.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { HomeComponent } from './home/home.component';
import { NewpatientComponent } from './Patient/newpatient/newpatient.component';
import { ViewpatientComponent } from './Patient/viewpatient/viewpatient.component';
import { DatarecordingComponent } from './Patient/datarecording/datarecording.component';
import { AppointmentComponent } from './Patient/appointment/appointment.component';
import { NotificationComponent } from './Patient/notification/notification.component';
import { authGuard } from './Guard/auth.guard';
import { DoctordashboardComponent } from './Doctor/doctordashboard/doctordashboard.component';
import { DocappointmentComponent } from './Doctor/docappointment/docappointment.component';
import { DocdataComponent } from './Doctor/docdata/docdata.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'register', component:RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'staffregistration', component: StaffregistrationComponent},
  {path: 'patientregistration', component: PatientregistrationComponent},
  {path: 'staffdashboard', component: StaffdashboardComponent, canActivate: [authGuard],
   children: [
    {path: 'doctordashboard', component: DoctordashboardComponent},
    {path: 'patient-records', component: DocdataComponent},
    {path: 'doc-notification', component: DocappointmentComponent}
  ]},
  {path: 'patientdashboard', component: PatientdashboardComponent, canActivate: [authGuard], 
  children: [
    {path: 'new-patient', component: NewpatientComponent},
    {path: 'view-patient', component: ViewpatientComponent},
    {path: 'patientdata', component: DatarecordingComponent},
    {path: 'makeappointment', component: AppointmentComponent},
    {path: 'notification', component: NotificationComponent},
  ]  
},
{ path: 'home', redirectTo: '', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
