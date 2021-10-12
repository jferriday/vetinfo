import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/types';

@Component({
  selector: 'app-pet-overview',
  templateUrl: './pet-overview.component.html',
  styleUrls: ['./pet-overview.component.scss']
})
export class PetOverviewComponent implements OnInit {
  @Input() selectedPet: Pet;
  @Output() clearSelection = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
