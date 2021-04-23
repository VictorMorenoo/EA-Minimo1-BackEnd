// farmacovigilanciacontroller.ts
// important functions for the farmacovigilancia service
import {Request, Response} from 'express';
import farmacovigilancia from '../models/farmacovigilancia';


// CALL TO CREATE A FARMACOVIGILANCIA
export async function createFarmacovigilancia(req: Request, res: Response): Promise<Response> {
    const {uname, descripcion, responsable, telefono} = req.body; // grab the fields from the POST request body

    console.log("new farmacovigilancia creation petition for user ", uname);
    console.log("searching...");
    const farma_compr = await farmacovigilancia.findOne({'uname': uname});

    if(!farma_compr){
        console.log("no coincidences found. Creating...");

        // new farmacovigilancia.
        const newFarmacovigilancia = {
            uname: uname,
            descripcion: descripcion,
            responsable: responsable,
            telefono: telefono
        }

        // create a farmacovigilancia model and save it
        const farma = new farmacovigilancia (newFarmacovigilancia);
        await farma.save();
        
        res.status(201);
        return res.json(farma.toJSON()); // Promises need to return something
    } else {
        console.log("farmacovigilancia already exists");
        res.status(401);
        return res.json({
            message: 'Could not create farmacovigilancia',
        });
    }
}


// CALL TO GET A FARMACOVIGILANCIA
export async function getFarmacovigilancia(res: Response, req: Request) : Promise <Response>{
    // REQUEST farmacovigilancia uname
    const uname = req.params.uname;

    console.log("new user search petition for farmacovigilancia ", uname);
    console.log("searching...")
    const farma = await farmacovigilancia.findOne({'uname': uname}, 'telefono');

    if(!farma){
        // farmacovigilancia does NOT exist
        res.status(404);
        res.json({
            message: 'could not find farmacovigilancia',
        });
    } else {
        // farmacovigilancia does exist
        res.status(200);
        res.json(farma.toJSON());
    }

    return res;
}

export async function getFarmacovigilancias(res: Response, req: Request) : Promise <Response>{
    try{
        const results = await farmacovigilancia.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }

}

export async function deleteFarmacovigilancia(res: Response, req: Request) : Promise <Response>{
    const {uname, descripcion, responsable, telefono} = req.body; // grab the fields from the POST request body

    console.log("new farmacovigilancia creation petition for user ", uname);
    console.log("searching...");
    const farma_compr = await farmacovigilancia.findOne({'uname': uname});

    if(farma_compr){
        console.log("no coincidences found. Creating...");

        // delete farmacovigilancia.
        const newFarmacovigilancia = {
            uname: null,
            descripcion: null,
            responsable: null,
            telefono: null
        }

        // create a farmacovigilancia model and save it
        const farma = new farmacovigilancia (newFarmacovigilancia);
        await farma.save();
        
        res.status(201);
        return res.json(farma.toJSON()); // Promises need to return something
    } else {
        console.log("farmacovigilancia already exists");
        res.status(401);
        return res.json({
            message: 'Could not create farmacovigilancia',
        });
    }
}