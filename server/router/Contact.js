import express from "express";
import { GetContact, CreateContact } from "../controller/Contact.js";

const router = express.Router();

router.get('/', GetContact);
router.post('/', CreateContact);
export default router;