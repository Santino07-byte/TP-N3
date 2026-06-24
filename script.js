// --- EJERCICIO 1 ---
const productos = [
    { id: 1, nombre: "Elden Ring", desc: "Un RPG de acción de mundo abierto implacable en las Tierras Intermedias.", destacado: true },
    { id: 2, nombre: "The Legend of Zelda: Ocarina of Time", desc: "El clásico revolucionario de Nintendo 64 que definió la aventura en 3D.", destacado: true },
    { id: 3, nombre: "The Elder Scrolls V: Skyrim", desc: "Explora un vasto mundo helado lleno de dragones, magia y libertad absoluta.", destacado: true },
    { id: 4, nombre: "Persona 5 Royal", desc: "Un estilizado JRPG escolar con ladrones fantasmas, turnos perfectos y gran banda sonora.", destacado: false },
    { id: 5, nombre: "Dark Souls III", desc: "Viaja al Reino de Lothric en una de las experiencias de acción y fantasía oscura más desafiantes.", destacado: false },
    { id: 6, nombre: "Red Dead Redemption 2", desc: "Una épica historia forajidos en el salvaje oeste con un nivel de detalle descomunal.", destacado: false }
];

const contenedor = document.getElementById("contenedorCards");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnRestablecer = document.getElementById("btnRestablecer");

function renderizarFlexbox(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = "";
    
    lista.forEach(p => {
        const article = document.createElement("article");
        article.classList.add("card");
        if (p.destacado) article.classList.add("resaltado");
        
        article.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>${p.desc}</p>
            <small>${p.destacado ? '⭐ Obra Maestra' : 'Juego Estándar'}</small>
        `;
        contenedor.appendChild(article);
    });
}

if (contenedor) {
    document.addEventListener("DOMContentLoaded", () => renderizarFlexbox(productos));
    
    btnFiltrar.addEventListener("click", () => {
        const filtrados = productos.filter(p => p.destacado);
        renderizarFlexbox(filtrados);
    });

    btnRestablecer.addEventListener("click", () => {
        renderizarFlexbox(productos);
    });
}

// --- EJERCICIO 2 ---
const listaPersonas = [];
const formulario = document.getElementById("formPersona");
const tbody = document.getElementById("tablaBody");

function renderTablaPersonas() {
    if (!tbody) return; 
    tbody.innerHTML = "";
    
    listaPersonas.forEach((persona, index) => {
        const fila = document.createElement("tr");
        const imc = (persona.peso / (persona.altura * persona.altura)).toFixed(2);

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura} m</td>
            <td>${persona.peso} kg</td>
            <td><strong>${imc}</strong></td>
        `;
        tbody.appendChild(fila);
    });
}

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datos = new FormData(formulario);
        
        const nuevaPersona = {
            nombre: datos.get("nombre").trim(),
            apellido: datos.get("apellido").trim(),
            edad: parseInt(datos.get("edad")),
            altura: parseFloat(datos.get("altura")),
            peso: parseFloat(datos.get("peso"))
        };

        listaPersonas.push(nuevaPersona);
        renderTablaPersonas();
        formulario.reset();
    });

}