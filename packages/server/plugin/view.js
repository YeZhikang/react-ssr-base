import { routes } from '../../router'
import { render } from "../common/render";
import { createServerStore } from "../../store";
import KoaRouter from 'koa-router'

export const captureView = ( ) => {
  const router = new KoaRouter();
  routes.forEach(route => {
    router.get(route.path, async (ctx, next) => {
      await next();
      ctx.set('content-type', 'text/html');
      ctx.body = render(ctx.path, createServerStore());
    })
  })

  return router.routes()
}
