import { Injectable } from '@angular/core';
import { AnimalHumaneSocietyService } from './animal-humane-society.service';
import { EvanstonAnimalShelterService } from './evanston-animal-shelter.service';
import { PetfinderApiService } from './petfinder-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor(private animalHumaneSocietyService: AnimalHumaneSocietyService,
              private evanstonAnimalShelterService: EvanstonAnimalShelterService,
              private petFinderApiService: PetfinderApiService) { }

  getPets(type:string) {

    var pets = [];
    console.log(type);
    return new Promise((resolve, reject) => {
      this.animalHumaneSocietyService.getPets(type).then(value => {

        this.petFinderApiService.getPets(type).then(value2 => {
          resolve(pets.concat(value).concat(value2));
        });
      });
    });
  }
}