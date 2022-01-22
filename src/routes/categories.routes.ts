/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });

    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all)
})

export { categoriesRoutes };
