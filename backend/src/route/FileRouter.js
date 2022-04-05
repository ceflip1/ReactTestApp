import { Router } from 'express';
import FileController from "../controller/FileController.js";

const fileRouter = Router();
fileRouter.get('/data', FileController.getSerchFormatterData);
fileRouter.get('/list', FileController.getAllList);

export default fileRouter;