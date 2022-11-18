const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://root:root@netflix.sqmvky2.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} ).then(()=> {
    console.log("db connected")
})


app.use("/api/user", userRoutes);

app.listen( process.env.PORT ||  5000, console.log("server started"))