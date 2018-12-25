const Koa = require('koa');
const KoaRouter = require('koa-router');

const Model = require('./model/interface');

const user = new Model('user');
const app = new Koa();

const router = KoaRouter();
router.get('/api/getUser', async(ctx, next) => {
  ctx.response.body = await user.query();
  await next();
});

app.use(router.routes());

app.listen(8000);