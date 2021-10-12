import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetOverviewComponent } from './pets/pet-overview/pet-overview.component';

import { PetsService } from './services/pets.service';
import { PetContainerComponent } from './pets/pet-container/pet-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design imports
import {MatListModule} from '@angular/material/list';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentsService } from './services/appointments.service';



@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetOverviewComponent,
    PetContainerComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //material imports
    MatListModule

  ],
  providers: [PetsService, AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
