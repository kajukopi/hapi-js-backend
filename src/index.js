import { config } from "dotenv";
config()
import { createServer } from "http";
import app from "./app.js";

const server = createServer(app.listener.server)

server.listen(process.env.PORT || 3000, '0.0.0.0', async () => {
  await app.start()
  console.log('Server running!');
})