// farmacovigilancia.service.ts
// entry point for user related stuff

import {Router} from 'express';
import { createFarmacovigilancia, getFarmacovigilancia, getFarmacovigilancias, deleteFarmacovigilancia} from '../controllers/farmacovigilancia.controller';

// Accomodate the routes at user_routes
const user_router = Router();

user_router.route('/register')  //Registrar datos farmacovigilancia
    .post(createFarmacovigilancia) // CREATE the user JSON object

user_router.route('/get:uname') 
    .get(getFarmacovigilancia) // CREATE the user JSON object

user_router.route('/all') 
    .get(getFarmacovigilancias) // CREATE the user JSON object

user_router.route('/delete') 
    .post(deleteFarmacovigilancia) // CREATE the user JSON object   

export default user_router; // EXPORT THE ROUTES