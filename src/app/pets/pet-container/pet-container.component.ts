import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/types';

@Component({
  selector: 'app-pet-container',
  templateUrl: './pet-container.component.html',
  styleUrls: ['./pet-container.component.scss']
})
export class PetContainerComponent implements OnInit {
  petsArray: Pet[];
  selectedPet: Pet | null = null;

  constructor(private petsService: PetsService) { }

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

}
