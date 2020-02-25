### Koa服务端开发起手式

项目目录说明

```
├── app
│   ├── controllers         ---  控制器
│   ├── helpers             ---  帮助工具集 (拦截器、JWT等)
│   ├── jobs                ---  任务 (日志任务等)
│   ├── entities            ---  数据实体，数据库模型文件
│   └── services            ---  controller 与 model 的粘合层 (提拱一些实用方法...)
├── config
│   ├── environments        ---  环境配置
│   ├── middlewares         ---  Koa 中间件配置
│   ├── connection          ---  数据库连接
│   ├── bootstrap           ---  启动任务
│   ├── customs             ---  用户的全局配置
│   └── interceptors        ---  全局的拦截器
├── variables.env           ---  环境变量文件，如果在此文件设置将会覆盖 'config/environments'
```