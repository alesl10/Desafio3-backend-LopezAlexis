import ProductManager from './index.js';

// Creando instancia
const manager = new ProductManager('./productos.JSON');

// Agregando algunos productos
manager.addProduct({ title: 'Producto 1', description: 'Descripción del producto 1', price: 10, thumbnail: 'https://url-del-thumbnail-1', code: 'A9374', stock: 5 });
manager.addProduct({ title: 'Producto 2', description: 'Descripción del producto 2', price: 20, thumbnail: 'https://url-del-thumbnail-2', code: 'A6587', stock: 10 });
manager.addProduct({ title: 'Producto 3', description: 'Descripción del producto 3', price: 30, thumbnail: 'https://url-del-thumbnail-3', code: 'A3214', stock: 15 });

// Obtenemos todos los productos agregados hasta el momento
const products = manager.getProducts();
console.log(products);

// Intentando obtener un producto que no existe
const productNotFound = manager.getProductById('A6333');
console.log(productNotFound)

// obtener un producto por su code
const product = manager.getProductById('A6587');
console.log(product);

// Modificar un producto por su codigo
manager.updateProduct('A9374', { title: 'Producto 1 Mod', description: 'Descripcion Producto1 Mod', price: 25, thumbnail: 'https://url-del-thumbnail-1-modificado', stock: 12 })


// Eliminar un producto por su codigo
manager.deleteProduct('A6587');
console.log(manager.getProducts());