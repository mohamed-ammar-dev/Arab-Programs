import { server } from "./src/config/server";

server.startServer();

import "./src/views-module/app/bootstrap";
import "./src/coupons-module/app/bootstrap";
import "./src/blogs-module/app/bootstrap";
import "./src/contactUs-module/app/bootstrap";
import "./src/error-module/app/routes/errorHandler";
