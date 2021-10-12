import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pet } from 'src/types';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() petsArray: Pet[];
  @Output() selectedPet = new EventEmitter();

  constructor(
    ) {}


  ngOnInit(): void {
   }

   onSelect(id) {
     this.selectedPet.emit(id);
   }
}
