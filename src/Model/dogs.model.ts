/// <reference path="../types/dogs.types.ts" />
import dogsInterface from "../Service/dogs/dogs.interface";

export default class Dog {
    constructor(readonly dogsService: dogsInterface) { }
    
    async getBreed(dog: string): Promise<Object> {
        const result = await this.dogsService.getBreed(dog);
        return result;
    }
}