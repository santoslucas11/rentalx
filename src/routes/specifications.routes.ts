/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
    const { name, description } = req.body
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    createSpecificationService.execute({ name, description });

    return res.status(201).send()
})

specificationsRoutes.get("/", (req, res) => {
    const all = specificationsRepository.list();

    return res.json(all)
})

export { specificationsRoutes }