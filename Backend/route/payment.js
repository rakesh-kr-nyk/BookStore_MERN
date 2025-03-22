import Razorpay from "razorpay";
import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json());

// Replace with your actual Razorpay credentials
const razorpay = new Razorpay({
  key_id: "rzp_test_FK1xshLTZZ1z8d",
  key_secret: "K4Ix9H8T0EadvUUnDaUMCKwc",
});

// Define payment order creation API
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount provided" });
    }

    const order = await razorpay.orders.create({
      amount: amount, // Razorpay expects amount in paise
      currency: "INR",
      payment_capture: 1,
    });

    res.json(order);
  } catch (error) {
    console.error("Payment creation error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Ensure default export
export default router;
