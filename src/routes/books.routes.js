import { Router } from "express";
import { getBooks } from '../controllers/books.controller.js'
import { authCheck } from "../middlewares/auth-check.js";

const router = Router()

router.get('/', getBooks)

export default router