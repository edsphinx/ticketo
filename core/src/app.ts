import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@efticketo/common';

const app = express();
// Followin is Added to ensure that express knows that is behind a proxy (ingress-nginx)
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);

app.all('*', async (req, re, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };