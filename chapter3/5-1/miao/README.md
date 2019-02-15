# miao



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

###下面是我的笔记

Tips：下面都只适用于windows平台

创建User的migration(model文件夹下面创建user.js、migration文件夹下面创建20190213154646-create-user.js)

`.\node_modules\.bin\sequelize model:generate --name User --attributes yourColumn1:string,yourColumn2:string`

同步到数据库

`.\node_modules\.bin\sequelize db:migrate`

同步到数据库，并获得详细错误

`.\node_modules\.bin\sequelize db:migrate --debug`

添加一些用户数据(seeder文件夹下面创建20190213155828-create-user.js)

`.\node_modules\.bin\sequelize seed:generate --name create-user`

填充数据

`.\node_modules\.bin\sequelize db:seed:all`

