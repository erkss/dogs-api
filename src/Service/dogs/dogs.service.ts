import axios from 'axios';
import DogsInterface from './dogs.interface';

const DOG_URL = 'https://dogapi.dog/api/v2/breeds';

export default class implements DogsInterface {

    async getBreed(dog: string): Promise<any> {
        const requireDogUrl = await axios.get(DOG_URL);

        let data = requireDogUrl.data;
        let breed = data.data.filter((breed: any) => 
            breed.attributes.name.toLowerCase().includes(dog.toLowerCase()));

        console.log(breed[0]);

        let life : Life = {
            min: breed[0].attributes.life.min,
            max: breed[0].attributes.life.max,
        }

        let newDoG : Dogstype = {
            name: breed[0].attributes.name,
            description: breed[0].attributes.description,
            life: life,
        }

        return newDoG;
    }
}