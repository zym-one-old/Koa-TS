import * as Koa from 'koa'
import * as kcors from '@koa/cors'
import * as bodyparser from 'koa-bodyparser'

export const useMiddlewares = <T extends Koa>(app: T): T => {
  app.use(kcors())
  app.use(bodyparser())
  
  return app
}
