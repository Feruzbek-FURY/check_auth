import { Router } from "express";
import usersRoutes from './users.routes.js'
import booksRoutes from './books.routes.js'
import { authCheck } from "../middlewares/auth-check.js";

const router = Router()

router.use(usersRoutes)
router.use('/books', booksRoutes)

export default router