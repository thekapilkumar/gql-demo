import { Server } from 'http';

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import morgan from 'morgan';

import urlpatterns from './routes';
import { typeDefs, resolvers } from './schemas';
import { DEBUG, MONGO_URI } from './settings';

export function getRequestListener() {
  const application = express();
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
  application.use(morgan('combined'));

  application.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: DEBUG,
  }));

  urlpatterns.forEach((router, path) => {
    application.use(path, router);
  });

  return application;
}

async function bootstrap(port, host) {
  const requestListener = getRequestListener();

  const options = {};
  const server = new Server(options, requestListener);
  await mongoose.connect(MONGO_URI);
  server.listen(port, host, () => {
    console.log(server.address());
  });
}

bootstrap(8000, '::');
