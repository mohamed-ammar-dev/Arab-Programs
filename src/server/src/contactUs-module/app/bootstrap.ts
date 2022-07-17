import { server } from "../../config/server";
import { contactUsRouter } from "./routes/contactUsRouter";

const app = server.app;

app.use("/contactUs", contactUsRouter);
