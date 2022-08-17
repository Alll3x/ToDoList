//importando o mongoose para configurar o bd
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
//conectar bd mongo no projeto

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err))
