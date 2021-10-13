import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment } from 'src/types';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  @Input() apptsArray: Appointment[];
  @Output() selectAppt = new EventEmitter()
  
  constructor(private apptService: AppointmentsService) { }

  ngOnInit(): void {
  }

  onSelect(appt) {
    this.selectAppt.emit(appt);
  }

 
}
