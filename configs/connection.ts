import * as entities from '../app/entities'
import { Environment } from './environments'
import { createConnection } from 'typeorm'

const db = Environment.db

createConnection({
  type: 'postgres',
  host: db.HOST,
  port: db.PORT,
  database: db.DATABASE,
  username: db.USER,
  password: db.PASS,
  entities: Object.keys(entities).map(name => entities[name]),
  logging: false,
  synchronize: true,
  extra:  {
    ssl: Environment.dbsslconn,
  }
})
  .then(() => console.log('数据库连接成功'))
  .catch(error => console.log(error))
