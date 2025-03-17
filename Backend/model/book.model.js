import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    pdf: String,        // Added PDF link field
    buyLink: String     // Added Buy link field
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
