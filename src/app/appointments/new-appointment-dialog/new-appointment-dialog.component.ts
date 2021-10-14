import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { NewAppointment, Pet } from 'src/types';

@Component({
  selector: 'app-new-appointment-dialog',
  templateUrl: './new-appointment-dialog.component.html',
  styleUrls: ['./new-appointment-dialog.component.scss']
})
export class NewAppointmentDialogComponent implements OnInit {
  petsList: Pet[];
  selectedPet: Pet | null = null;
  newAppointment: NewAppointment = {
    petId: null,
    petName: null,
    date: null,
    subject: null,
    notes: null
  }

apptData: NewAppointment = {
  petId: this.selectedPet? this.selectedPet.id : null ,
  petName: this.selectedPet? this.selectedPet.name : null,
  date: null,
  subject: null,
  notes: null
}

  constructor(
    private petsService: PetsService,
    private apptsService: AppointmentsService
  ) { }

  ngOnInit(): void {
    this.apptData = this.newAppointment;
    this.getPets()
  }

  getPets(){
    this.petsService.getAllPets()
      .subscribe(data => this.petsList = data)
  }

  // updates the current pet data to inlcude id and name of the selected pet
  updateSelectedPet() {
    this.apptData.petId = this.selectedPet.id;
    this.apptData.petName = this.selectedPet.name;
    console.log(this.apptData)
  }

  onSave(): void {
    console.log(this.apptData)
  }



}
