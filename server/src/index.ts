import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Context } from "apollo-server-core";
import cors from "cors";
import { REQUEST_ORIGIN_URL_CORS } from "./utils/constants";
import { DiRepository } from "./repositories/di.repository";

interface Initialization {
  url: String;
  port: Number;
}

export class Main implements Initialization {
  public readonly url: string = "http://localhost";
  public readonly port: number = 4000;

  public main = async (): Promise<void> => {
    const app = express();
    app.use(
      cors({
        origin: REQUEST_ORIGIN_URL_CORS,
        credentials: true,
      })
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [DiRepository],
        validate: false,
      }),
      debug: true,
      uploads: true,

      context: ({ req, res }): Context => ({ req, res }),
    });

    apolloServer.applyMiddleware({
      app,
      cors: false, //handled application-wide by package `cors`
    });
    this.startServer(app);
  };

  private startServer = (app: {
    listen: (arg0: number, arg1: () => void) => void;
  }) => {
    app.listen(this.port, () => {
      console.log(`✅ Server started on ${this.url + ":" + this.port}`);
    });
  };
}

const { main } = new Main();
main().catch((err) => console.log(err));
