import { config } from "dotenv";
config()
// import { createServer } from "http";
import app from "./app.js";

// const server = createServer()

app.listener.listen(process.env.PORT || 3000, '0.0.0.0', async () => {
  console.log(`Server running at: ${app.info.uri} || ${app.info.host} || ${app.info.port}`);
})