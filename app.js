import express, {json, urlencoded} from "express";
import config from "config";

const app = express();

const port = 8080;

const response = config.get("response-string");

app.use(json());
app.use(urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.status(200).json({ "get": response });
});

app.get("/reload", (req, res) => {
    delete require.cache[require.resolve('config')];
})