import { AppDataSource } from "@typeorm-config";
import { ExpressConfig } from "@express-config";
import * as express from "express";
import { config } from "dotenv";
import { ILogger } from "@interfaces/common/ILogger";
import { Logger } from "@helpers/logger";

const main = async () => {
  const typeORM = await AppDataSource.initialize();
  const app = express();
  const Express = new ExpressConfig(app);
  if (typeORM.isInitialized) {

   const  _logger: ILogger<ExpressConfig> = new Logger<ExpressConfig>();

  _logger.logInformation("🔗 Connected to database using TypeORM. Starting server... 🚀");
    await Express.init();
  }
};

config({ path: "src/.env", debug: true,encoding:'latin1' });
main();
