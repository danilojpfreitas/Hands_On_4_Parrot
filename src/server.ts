import express , { json } from "express"
import { router } from "./routes";
import { db } from "./database/db"

const app = express();

app.use(json());
app.use(router);

app.listen(3002, async () => {
  await db.sync();
  console.log(`App running on 3002!`)
})