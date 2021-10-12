import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Appointment} from '../../types'

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  endpoint = 'http://localhost:3000/appointments';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Appointment[]>  {
    return this.http.get<Appointment[]>(this.endpoint);
  }

  getAppointment(id): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.endpoint}/${id}`);
  }

  postNewAppointment(appt: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.endpoint, JSON.stringify(appt), this.httpOptions);
  }
  updateAppointment(appt: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.endpoint}/${appt.id}`, JSON.stringify(appt), this.httpOptions)
  }

  deleteAppointment(id) {
    return this.http.delete(`${this.endpoint}/${id}`, this.httpOptions);
  }
}
