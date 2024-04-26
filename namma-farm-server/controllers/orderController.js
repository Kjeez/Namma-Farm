const Razorpay = require("razorpay");
const crypto = require("crypto");
const orderModel = require("../models/orderModel");

const createOrderController = async (req, res) => {
  try {
    //amount*100
    const { amount, currency, receipt } = req.body;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: amount,
      currency: currency,
      receipt: receipt,
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);

    if (!order) {
      res.status(500).send({
        success: false,
        message: "Order not created!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const validOrderController = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest !== razorpay_signature) {
      return res.status(400).send({
        success: false,
        message: "Transaction is not legitimate!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Transaction successful",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const saveOrderController = async (req, res) => {
  const webhookSecret = "YOUR_WEBHOOK_SECRET";
  const hmac = crypto.createHmac("sha256", webhookSecret);
  const signature = hmac.update(JSON.stringify(req.body)).digest("hex");

  if (signature !== req.headers["x-razorpay-signature"]) {
    return res.status(400).send({
      success: false,
      message: "Invalid Signature!",
    });
  }

  const payload = req.body;
  const paymentId = payload.payload.payment.entity.id;
  const orderId = payload.payload.payment.entity.order_id;
  const amount = payload.payload.payment.entity.amount;
  const orderBy = payload.payload.order.entity.notes.userId;
  const products = payload.payload.order.entity.notes.products; // Assuming products are included in notes field

  try {
    const order = await orderModel({
      orderBy: orderBy,
      products: products.map((product) => ({
        productId: product.productId,
        quantity: product.quantity,
        price: product.price,
      })),
      paymentIntent: payload.payload.payment.entity,
      totalPrice: amount,
    }).save();

    res.status(200).send({
      success: true,
      message: "Order saved successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  createOrderController,
  validOrderController,
  saveOrderController,
};
