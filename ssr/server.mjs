import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err, 'error by ssr server');
      return res.status(500).send('Something is wrong', JSON.stringify(err, null, 2));
    }
    const html = ReactDomServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(3005, () => {
  console.log('App. is lunch');
});
