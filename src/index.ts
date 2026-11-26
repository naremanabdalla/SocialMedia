import { bootstrap } from "./app.controller.js";

bootstrap().catch((error: unknown) => {
  console.log("faild to start the application ", error);

  process.exit(1);
});
