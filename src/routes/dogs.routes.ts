import express from 'express';
import Dog from "../Model/dogs.model";
import dogsService from "../Service/dogs/dogs.service";
const dogsRouter: express.Router = express.Router();

dogsRouter.get("/dogsApiMessage", (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({ message: "Dogs Api working!" });
    } catch (error) {
        console.error("Error in GET /dogsApiMessage:", error);
    }
})

dogsRouter.get("/getBreed/:id", async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const dogModel: Dog = new Dog(new dogsService());
        const { id } = req.params;

        if(!id) {
            return res.status(404).send({ message: "ID is required." });
        }

        const result = await dogModel.getBreed(id);

        if(!result) {
            return res.status(404).send({ message: "Breed not found." });
        }

        res.status(200).send({result}); 
    } catch (error) {
        console.error("Error in GET /getBreed/:id", error);
        res.status(500).send({ message: "Internal server error." });
    }
})

export default dogsRouter;