import { join } from 'path'
import * as dotenv from 'dotenv'

import dev from './dev'
import prod from './prod'

const parsedEnvs = (): object => {
    const result = dotenv.config({ path: join(__dirname, '../variables.env') })
    if (result.error) {
        console.log('未找到文件: variables.env')
        return {}
    }
    return result.parsed
}

const isProd = parsedEnvs['NODE_ENV'] === 'production'
const env = isProd ? prod : dev

Object.keys(parsedEnvs || {}).forEach(key => {
    env[key] = parsedEnvs[key]
})

export const Environment = env