class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        // campos obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Error: Todos los campos son obligatorios.");
            return;
        }

        // validar code repetido
        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
            console.log(`Error: El producto ya está registrado.`);
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        // incrementar id automatico
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);

    }

    // mostrar productos
    getProducts = () => {
        console.log("productos:")
        this.products.map((product) => console.log(product))
    };

    // mostrar producto encontrado
    getProductById = (id) => {
        if (this.products.find(product => product.id == id)) {
            const productSearch = this.products.find(product => product.id == id);
            console.log("producto encontrado:");
            console.log(productSearch);
        } else {
            console.log("no encontrado")
        }
    }


};


// probando si funciona
const manejadorProductos = new ProductManager();

manejadorProductos.addProduct("producto prueba 1", "description producto prueba", 750, "ruta de imagen", "abc1", 15);
manejadorProductos.getProducts();
manejadorProductos.addProduct("producto prueba 1", "description producto prueba", 750, "ruta de imagen", "abc1", 15);
manejadorProductos.addProduct("producto prueba 2", "description producto prueba", 750, "ruta de imagen", "abc2", 15);
manejadorProductos.getProducts();
console.log("buscando productos")
manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);