import { TestBed } from '@angular/core/testing';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  let service: PetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return an array of pet objects', () => {
    const expectedArray =  [
      {
          "petId": 1,
          "name": "Gustav",
          "species": "dog",
          "breed": "pug",
          "age": 7,
          "weight": 7,
          "medication": [
              {
                  "medicationId": 1,
                  "name": "Painkiller",
                  "doseInMg": 200,
                  "doseFrequency": "Daily",
                  "renewal": "2021-12-01"
              }
          ]
        }
      ]
          
    service.refreshAllPets();
    expect(service.petsArray).toBe(expectedArray);
  })
});
