import express from "express"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import paymentRoutes from "./route/payment.js";  // ✅ Correctly importing the payment route

dotenv.config();
const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// ✅ Connect to MongoDB
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB Connection Error:", error));

// ✅ Define API routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/payments", paymentRoutes);  // ✅ Use the payment routes

// ✅ Serve frontend files
app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get('*', (_, res) => { 
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html")) 
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
