import express from 'express';
import productsRouter from './routes/productsRouter.js'
import cartRouter from './routes/cartRouter.js'
import __dirname from './utils.js';
import handlebars from 'express-handlebars'
import viewsRoute from './routes/viewsRouter.js'
import { Server } from 'socket.io'


const app = express();
const httpserver = app.listen(8080, () => console.log("Servidor arriba"));

const socketServer = new Server(httpserver)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


app.use('/', viewsRoute)
app.use('/api/products', productsRouter);
app.use('/api/carts', cartRouter);

import productos from './data/products.json' assert {type: 'json'}

socketServer.on('connection', socket => {
    console.log("nuevo cliente")

    socket.on('message', data =>{
        console.log(data)
    })
    socket.emit('realTimeProducts', productos)

})




