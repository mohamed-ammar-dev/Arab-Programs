import { server } from "../../config/server";
import { blogsRouter } from "./routes/blogsRouter";

const app = server.app;

app.use("/blogs", blogsRouter);
