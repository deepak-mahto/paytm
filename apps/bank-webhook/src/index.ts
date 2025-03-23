import express from "express";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", (req, res) => {
  // TODO: Add zod validation here
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };
  // Update balance in db, add txn
});
