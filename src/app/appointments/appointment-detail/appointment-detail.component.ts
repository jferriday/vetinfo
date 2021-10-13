import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/types';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {
  @Input() appt: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
