import express from 'express';
import ProductManager from './index.js';

const app = express();

const manager = new ProductManager('./productos.JSON');
const products = await manager.getProducts();

// Query ?limit
app.get('/products/', (req, res) => {
    let limit = req.query.limit;

    if (!limit) return res.send(products)

    let productsLimit = products.slice(0, limit);
    res.send(productsLimit)
})

// Params :pid
app.get('/products/:pid', (req, res) => {

    let idProduct = req.params.pid
    let productFilter = products.find(p => p.id == idProduct)

    if (!productFilter) return res.send({ error: "No existe el producto" })

    res.send({ productFilter })
})


app.listen(8080, () => console.log("Servidor arriba"));

