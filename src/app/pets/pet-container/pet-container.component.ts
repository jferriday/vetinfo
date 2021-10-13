import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/types';
import { MatDialog } from '@angular/material/dialog';
import { EditPetDialogComponent } from '../edit-pet-dialog/edit-pet-dialog.component';


@Component({
  selector: 'app-pet-container',
  templateUrl: './pet-container.component.html',
  styleUrls: ['./pet-container.component.scss']
})
export class PetContainerComponent implements OnInit {
  petsArray: Pet[];
  selectedPet: Pet | null = null;

  constructor(
    private petsService: PetsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.refreshAllPets();
  }

   // gets all pets from the pets service
   refreshAllPets(): void {
    this.petsService.getAllPets().subscribe(pets => this.petsArray = pets);
  }

  selectPet(id: number): void {
    console.log('Selected pet ' + id);
    this.selectedPet = this.petsArray.filter(pet => pet.id === id)[0];
    console.log('the selected pet is', this.selectedPet);
  }

  clearSelectedPet(): void {
    this.selectedPet = null;
  }

  openAddPetDialog(): void {
    const addPetDialogRef = this.dialog.open(EditPetDialogComponent).componentInstance.onSave.subscribe(() => this.refreshAllPets());
    //.afterClosed().subscribe(result => this.refreshAllPets());
  }
  
  closeAddPetDialog():void {
    const addPetDialogRef = this.dialog.closeAll();
  }

}
