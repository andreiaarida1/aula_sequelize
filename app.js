const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressEjsLayouts=require('express-ejs-layouts');

const indexRouter = require('./routes/index');
//marcas
const marcasRouter=require('./routes/marcas/index');
const marcasAddRouter=require('./routes/marcas/add');
const marcasEditRouter=require('./routes/marcas/edit');
const marcasSaveRouter = require('./routes/marcas/save');
const marcasUpRouter = require('./routes/marcas/up');


//produtos
const produtosRouter=require('./routes/produtos/index');
const produtosAddRouter=require('./routes/produtos/add');
const produtosEditRouter=require('./routes/produtos/edit');
const produtosSaveRouter=require('./routes/produtos/save');
const produtosUpRouter=require('./routes/produtos/up');



const db=require('./models');
const app = express();

db.sequelize.sync().then(() => {
  console.log('Conectou!');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//marcas url
app.use('/marcas',marcasRouter)
app.use('/marcas_add',marcasAddRouter);
app.use('/marcas_edit',marcasEditRouter);
app.use('/marcas_save', marcasSaveRouter);
app.use('/marcas_up', marcasUpRouter);


//produtos url
app.use('/produtos',produtosRouter)
app.use('/produtos_add',produtosAddRouter);
app.use('/produtos_edit',produtosEditRouter);
app.use('/produtos_save',produtosSaveRouter);
app.use('/produtos_up',produtosUpRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
