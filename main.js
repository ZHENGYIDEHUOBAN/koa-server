const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = KoaRouter();
router.get('/api/getUser', async(ctx, next) => {
  ctx.response.body = 'index page';
  await next();
});

app.use(router.routes());

app.listen(8000);