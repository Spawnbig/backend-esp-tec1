const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
// Settings
app.set('port', process.env.PORT || 3000);
// Connection to mongoDB
mongoose.connect(`mongodb+srv://ProyectoEspTec1:mQMHnNZh3zSGElid@proyectoesptec1.lv48fnb.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
})
.then(() => console.log('Connected database'))
.catch(e => console.log('DB Error:', e))
// Middlewares
app.use(cors());
// Routes
app.use('/api', require('./routes'));
app.listen(app.get('port'), function () {
console.log(`App running at port: http://localhost:${app.get('port')}`);
});
module.exports = app