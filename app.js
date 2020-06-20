const Koa = require('koa');
const app = new Koa();
const koaRouter = require('koa-router')

const router = new koaRouter

router.get('/',async (ctx)=>{
    ctx.body="首页";
})

/*启动路由*/
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);