import express from "express";

const app = express();
const router = express.Router();
const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}.`);
});