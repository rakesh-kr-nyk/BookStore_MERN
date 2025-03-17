import express from "express";
import Contact from "../model/contact.model.js";

const router = express.Router();

// POST route to handle form submission
router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });

        await newContact.save();
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
});

export default router;
