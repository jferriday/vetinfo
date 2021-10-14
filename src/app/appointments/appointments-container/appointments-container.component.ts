import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment } from 'src/types';
import {MatDialog} from '@angular/material/dialog';
import { NewAppointmentDialogComponent } from '../new-appointment-dialog/new-appointment-dialog.component';

@Component({
  selector: 'app-appointments-container',
  templateUrl: './appointments-container.component.html',
  styleUrls: ['./appointments-container.component.scss']
})
export class AppointmentsContainerComponent implements OnInit {
  apptsArray: Appointment[] = [];
  selectedAppointment: Appointment | null;
  constructor(
    private apptService: AppointmentsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refreshAppointments();
  }
  refreshAppointments(){
    this.apptService.getAll()
    .subscribe(data => this.apptsArray = data);
  }

  updateSelectedAppt(appt) {
    console.log(`recieved ${appt}`)
    this.selectedAppointment = appt;
  }

  openAddApptDialog(): void {
    const addApptDialog = this.dialog.open(NewAppointmentDialogComponent);
  }
}
