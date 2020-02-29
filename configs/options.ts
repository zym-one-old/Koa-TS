import { RoutingControllersOptions } from 'routing-controllers'
import * as interceptors from './interceptors'
import * as controllers from '../app/controllers'

const objectToArray = (dict: any): Array<any> =>
  Object.keys(dict).map(name => dict[name])

export const routingConfigs: RoutingControllersOptions = {
  // 路由控制器
  controllers: objectToArray(controllers),
  // 全局拦截器
  interceptors: objectToArray(interceptors),
  // 路由前缀
  routePrefix: '/apis',
  // 自动验证实体
  validation: true
}
