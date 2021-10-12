import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import interfaces
import { NewPet, Pet } from './../../types';



@Injectable({
  providedIn: 'root'
})
export class PetsService {
  endpoint = 'http://localhost:3000/pets';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Cache of pets and their info to provide to the UI
  petList: Pet[] = [];
  selectedPet: Pet;


  constructor(private http: HttpClient) { }
  // functions to fetch information from the server
  getAllPets(): Observable<Pet[]> {
    const petsArray = this.http.get<Pet[]>(this.endpoint);
    petsArray.subscribe(data => this.petList = data);
    return petsArray;
  }

  getPetById(id): Observable<Pet> {
    const pet = this.http.get<Pet>(`${this.endpoint}/${id}`);
    return pet;
  }

  postNewPet(petObject: NewPet): Observable<Pet> {
    
    return this.http.post<Pet>(this.endpoint,JSON.stringify(petObject), this.httpOptions);
  }

  updateExistingPet(petObject: Pet) {
    return this.http.put<Pet>(`${this.endpoint}/${petObject.id}`, JSON.stringify(petObject), this.httpOptions)
  }

 // takes in a pet object and updates the shared selected pet state
  updateSelectedPet(pet: Pet): void {
    this.selectedPet = pet;
  }



  // Move these into components
  // Creates a new pet using object passed in
  saveNewPet(petObject: NewPet): Pet {
    let newPetObject: Pet;
    this.postNewPet(petObject).subscribe(data => newPetObject = data);
    return newPetObject
  }

  updatePet(petObject: Pet): Pet{
    let  updatedPetObject: Pet;
    this.updateExistingPet(petObject)
      .subscribe(data => updatedPetObject = data);
    return updatedPetObject; 
  }
};


