import express from 'express';
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter
} from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import React from 'react';

import createFetchRequest from './request';
import routes from './routes';

const app = express();

let handler = createStaticHandler(routes);

app.get('*', async (req, res) => {
  let fetchRequest = createFetchRequest(req);
  let context = await handler.query(fetchRequest);

  let router = createStaticRouter(handler.dataRoutes, context);
  let html = renderToString(<StaticRouterProvider router={router} context={context} />);

  if (context instanceof Response && [301, 302, 303, 307, 308].includes(context.status)) {
    return res.redirect(context.status, context.headers.get('Location'));
  }

  res.send('<!DOCTYPE html>' + html);
  // We'll tackle rendering next...
});

const listener = app.listen(3000, () => {
  let { port } = listener.address();
  console.log(`Listening on port ${port}`);
});
