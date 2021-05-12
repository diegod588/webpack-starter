import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerHTML = `Welcome ${nombre}`;
    document.body.append(h1);
}