import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  bookName: { type: String, required: true },
  bookPdf: { type: String, required: true },
  price: { type: Number, required: true },
  paymentId: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;