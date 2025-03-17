import express from "express";
import { getBooks, getBookByName } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks); // Get all books
router.get("/name/:name", getBookByName); // Get book by name (slug)

export default router;
