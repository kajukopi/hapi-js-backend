import { config } from "dotenv";
config()
import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Inert from "@hapi/inert";
import Handlebars from "handlebars";

import Path from "path";
import { fileURLToPath } from "url";

// Homepage Handler
import { homepage, staticfile } from "./routes/index.js";

// Create __dirname
let __dirname = Path.dirname(fileURLToPath(import.meta.url))

// Create app
const app = Hapi.Server({
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'assets')
    }
  },
  debug: false
});

// Registration
await app.register(Vision)
await app.register(Inert);

// App Views Handlebars
app.views({
  engines: { hbs: Handlebars },
  relativeTo: __dirname,
  path: 'views',
  partialsPath: 'views/partials',
  layout: true,
  layoutPath: 'views/layout',
  layoutKeyword: 'body'
});

app.state('session', {
  ttl: 24 * 60 * 60 * 1000,     // One day
  isSecure: true,
  path: '/',
  encoding: 'base64json'
});

// Route to serve static files from the 'assets' directory
app.route(staticfile);

// Route Homepage
app.route(homepage);

app.events.on({ name: 'request', channels: 'internal' }, (request, event, tags) => {
  if (tags.error) {
    console.log(event.error.output);
  }
});

// App initialize
await app.initialize()

export default app

