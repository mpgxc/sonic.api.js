import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

app.set("PORT_SERVER", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
