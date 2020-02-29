import 'reflect-metadata'
import { useKoaServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { Server } from 'http'
import * as Koa from 'koa'

import { useMiddlewares } from './configs/middlewares'
import { Environment } from './configs/environments'
import { routingConfigs } from './configs/options'


if(Environment.useDB){
  require('./connection')
}

module.exports = (async (): Promise<Server> => {
  try {
    const koa: Koa = new Koa()
    const app: Koa = useKoaServer<Koa>(koa, routingConfigs) 
    useContainer(Container)
    useMiddlewares(app)

    return app.listen(Environment.port, () => {
      console.log(`server listening on ${Environment.port}, in ${Environment.NODE_ENV} mode.`)
    })
  } catch (e) {
    console.log(e)
  }
})()
