import { Router } from "express";
import * as controller from '../controllers/user.controller'

const router = Router()

router.post('/signup',controller.signUp);
router.post('/signin',controller.signIn);

export default router