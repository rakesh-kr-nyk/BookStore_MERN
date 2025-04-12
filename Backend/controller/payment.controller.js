import Payment from "../model/payment.model.js";

// Save payment details
export const savePayment = async (req, res) => {
  try {
    const { email, bookName, bookPdf, price, paymentId } = req.body;

    const newPayment = new Payment({
      email,
      bookName,
      bookPdf,
      price,
      paymentId,
    });

    await newPayment.save();

    // ✅ Log payment details
    console.log("✅ Payment Saved:", newPayment);

    res.status(201).json({ message: "Payment saved successfully", newPayment });
  } catch (error) {
    console.error("❌ Error saving payment:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// Get all payments
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
