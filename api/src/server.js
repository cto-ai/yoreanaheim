'use strict';

import path from 'path';
import config from 'config';
import router from './router';
import serve from 'koa-static';
import pkg from '../../package.json';
import fs from 'fs';

const logger = require('koa-logger')

// init app
const Koa = require('koa');
const app = new Koa();

// app config
process.title = pkg.name;
process.versions.app = pkg.version;
app.poweredBy = false;

var port = process.env.PORT || config.server.port;

// add middleware
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve(path.join(__dirname, '../../app/build'), {
}));

app.use(async ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, '../../app/build/index.html'), 'utf8');
});

// start server
app.listen(port, () => {
    console.log('listening on port ' + port);
});