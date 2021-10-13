import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewPet } from 'src/types';
import { PetsService } from 'src/app/services/pets.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-pet-dialog',
  templateUrl: './edit-pet-dialog.component.html',
  styleUrls: ['./edit-pet-dialog.component.scss']
})
export class EditPetDialogComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  onSave = new EventEmitter();
  blankPetData: NewPet = {
    name: '',
    species: '',
    breed: '',
    age: null,
    weight: null,
    medication: []
  }
  petData: NewPet = {
    name: '',
    species: '',
    breed: '',
    age: null,
    weight: null,
    medication: []
  }

  constructor(
    private petsService: PetsService,
  
    ) { }

  ngOnInit(): void {
    this.petData.name = ''
  }

  onSubmit() {
    this.petsService.postNewPet(this.petData)
      .subscribe(data => {
        this.onSave.emit();
        this.petData = this.blankPetData;
      }, error => alert(error))
  }


}
