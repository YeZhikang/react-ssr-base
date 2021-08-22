import Koa from 'koa';
import path from 'path';
import React from 'react';
import koaStatic from 'koa-static'
import { captureView } from "./plugin/view";

const PORT = process.env.PORT || 3006;
const app = new Koa();

app.use(captureView());

app.use(koaStatic(path.resolve(process.cwd(), './client-build')));

app.listen(PORT, () => {
  console.log('listening at: ', PORT)
})
