const socket = io();

socket.on('realTimeProducts', producto => {
    producto.forEach(x => {
        const contenedor = document.querySelector('#realTime')
        let item = document.createElement('li');
        item.innerHTML = `
        <li>
        <p>nombre :${x.title}</p>
        <p>Descripcion :${x.description}</p>
        <p>Precio :${x.price}</p>
        <p>Stock :${x.stock}</p>
     </li>
        `
        contenedor.appendChild(item)
    });
})