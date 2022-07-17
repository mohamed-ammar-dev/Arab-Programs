import { server } from "../../config/server";
import { couponsRouter } from "./routes/couponsRouter";

const app = server.app;

app.use("/coupons", couponsRouter);
