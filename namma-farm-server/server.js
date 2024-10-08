const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const app = express();

app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

connectDb();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Namma Farm Server</h1>");
});

app.use("/auth", require("./routes/authRoute.js"));
app.use("/user", require("./routes/userRoute.js"));
app.use("/category", require("./routes/categoryRoute.js"));
app.use("/product", require("./routes/productRoute.js"));
app.use("/wishlist", require("./routes/wishlistRoute.js"));
app.use("/coupon", require("./routes/couponRoute.js"));
app.use("/order", require("./routes/orderRoute.js"));


app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
