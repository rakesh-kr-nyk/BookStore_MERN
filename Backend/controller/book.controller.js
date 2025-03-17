import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export const getBookByName = async (req, res) => {
  try {
    const name = req.params.name.replace(/-/g, " "); // Convert slug back to normal name
    const book = await Book.findOne({ name: new RegExp(`^${name}$`, "i") }); // Case-insensitive search

    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book details" });
  }
};
