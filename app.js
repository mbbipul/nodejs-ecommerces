const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

// For pug engine
// app.set('view engine','pug');
// app.set('views','views');

// For express-handlesbar engine
app.engine(
    'hbs', 
    exphbs({
        extname: 'hbs',
        layoutsDir: 'views/layouts',
        defaultLayout: 'main-layout'
    })
);
app.set('view engine', 'hbs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use( (req,res,next) => {
    res.status(404).render('404',{pageTitle: "Page Not Found!"});
});
app.listen(3001);