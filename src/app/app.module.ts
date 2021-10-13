import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetOverviewComponent } from './pets/pet-overview/pet-overview.component';
import { AppointmentsContainerComponent } from './appointments/appointments-container/appointments-container.component';
import { AppointmentDetailComponent } from './appointments/appointment-detail/appointment-detail.component';

import { PetsService } from './services/pets.service';
import { PetContainerComponent } from './pets/pet-container/pet-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentsService } from './services/appointments.service';

// Material design imports
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { EditPetDialogComponent } from './pets/edit-pet-dialog/edit-pet-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetOverviewComponent,
    PetContainerComponent,
    AppointmentListComponent,
    AppointmentsContainerComponent,
    AppointmentDetailComponent,
    EditPetDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: PetContainerComponent},
      {path: 'appointments', component: AppointmentsContainerComponent}
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule

  ],
  providers: [PetsService, AppointmentsService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
