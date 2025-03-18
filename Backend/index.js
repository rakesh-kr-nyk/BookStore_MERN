import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";  // Import contact route
import path from "path";
const app = express();

app.use(cors());
app.use(express.json());

const _dirname = path.resolve();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB Connection Error:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Add contact route

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get('*', (_, res) => { res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html")) });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
