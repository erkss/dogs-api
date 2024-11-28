/// <reference path="../../types/dogs.types.ts" />

export default interface DogsInterface {
    getBreed(dog: string): Promise<object>;
}