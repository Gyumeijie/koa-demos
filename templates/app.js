const path = require('path');
const views = require('koa-views');
const router = require('koa-router')();
const Koa = require('koa');
const app = new Koa();

// setup views, appending .ejs
app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

// applicationdata
const userInfo = {
  name: {
    first: 'Yu',
    last: 'MeiJie'
  },
  age: 26
};

// router handler
const user = async (ctx) => {
   console.log(`${ctx.path} is matched.`)
   await ctx.render('user', {userInfo})
}


router.get('/user', user)
      .get('*', function(ctx){
          ctx.body = `not found ${ctx.path}`
      })


app.use(router.routes());

app.listen(3000);
