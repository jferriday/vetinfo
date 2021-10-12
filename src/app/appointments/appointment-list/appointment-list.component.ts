import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment } from 'src/types';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  apptsArray: Appointment[] = [];
  constructor(private apptService: AppointmentsService) { }

  ngOnInit(): void {
    this.refreshAppointments();
  }

  refreshAppointments(){
    this.apptService.getAll()
    .subscribe(data => this.apptsArray = data);
  }

}
