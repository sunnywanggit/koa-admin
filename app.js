const Koa = require('koa');
const app = new Koa();
const koaRouter = require('koa-router')
const path = require('path')
const render = require('koa-ejs')
// remove node_moduless

const router = new koaRouter

//配置模板引擎
render(app,{
    root:path.join(__dirname,'views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false
})

//路由跳转
router.get('/',async ctx=>{
    await ctx.render('index',{
        title:'index'
    })
})

// router.get('/',async (ctx)=>{
//     ctx.body="首页";
// })

/*启动路由*/
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);