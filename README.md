# Teoría clase

npx (en Node) es para utilizar un módulo o dependencia sin instalarlo en local

Se escribe en terminal "npx create-react-app my-app-name"

"my-app-name" será el nombre del proyecto y no se podrá cambiar

Esto creará la estructura de carpetas básica del proyecto (tarda un rato)

Nos metemos en la carpeta desde la terminal "cd medias-query"

Veremos que se mete en una rama (master). Esto es que ha inicializado un proyecto en git

Arrancamos el servidor "npm start" -> Se abre automáticamente el navegador en localhost:3000


La carpeta public es lo que se va a mandar al navegador para que pueda navegar:

 -Contiene un index.html que se ha autogenerado (rara vez habrá que tocarlo). Hay un div con un id=root (es el nodo donde se va a enganchar todos los componentes (nodos) de la web)

-Manifest para varias cosas: dar formato a imágenes, decirles qué icono usar...

-Robot para temas de SEO


Carpeta principal SOURCE (src):

Un componente es una sección de la web con un significado específico

"index.html" (public) + "index.js" (src) --> son la base del proyecto

"index.js" va a unir el componente "App.js" con el elemento "root" (id=root) -> App cuelga de root y va a ser lo que se renderiza.

En "App.js" está la función App() con un return que devuelve un código HTML --> Es el contenido del átomo que se ve

En este archivo de App.js se importa el logo y el App.css, y se exporta la función App "export default App;"

En index.js se importa App -> "import App from './App';":


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

El código anterior dice --> En el elemento "root" (HTML) le voy a renderizar App.



De esta manera se une el DOM real (index.html[public] -> <div id="root"> vacío)
/
con el componente del DOM virtual
/
(index.js[src] -> <App />)




////// DISEÑO DE COMPONENTES

Lo primero que hay que hacer es planificar el contenido de la web en secciones. Ejemplo tabulado al estilo PUG para que se entienda:

App
    Header
        Img
        Nav
        Img
        Img
    Main
        ProductList
            ProductItem*3
        ReviewList
            ReviewItem*2
    Footer
        Nav
        Nav


Instalamos la extensión de VisualCode ES7+ React/Redux/React-Native para tener atajos de teclado.

Se crean los componentes en la carpeta src: Header.jsx  Main.jsx  Footer.jsx

Creamos un componente de clase con el atajo de teclado "rce" -> En Header.jsx se escribe "rce" y se pulsa enter en "sugeridos". Se crea automáticamente un componente de clase para Header:


import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>Esto es el Header!</div>
    )
  }
}
export default Header


Cambiamos el nombre de la etiqueta <div> por el que corresponda. En este caso <header>.


A continuación, se unen header, main y footer a App:

En App.js, se borra el código de ejemplo del átomo (lo que hay dentro del <div>) y se escriben las etiquetas <header/>, <main/> y <footer/>. En algunos equipos, al escribir la etiqueta te la sugiere. Si la pinchas puede que se genere la importación automáticamente (más arriba, en importaciones). Si no, hay se escribe manualmente.


Instalamos una extensión de chrome "React Developer Tools"

Con esto, Si una Web está hecha con React (ej: Uber) puedo ver su arbol de componentes -> Inspect -> Components: Es el árbol de componentes que se crea la Web en cuestión para su desarrollo con React. Cuando se hace un despliegue en cloud, los nombres de las ramificaciones los simplicica y genera una máquina, así que es difícil saber qué nombres tenían


A continuación desarrollamos ProductList y ProductItem. Se crean ambos archivos *.jsx en la carpeta src. Accedemos y se crea en cada uno su componente de clase ("rce")

Según el desglose de componentes hecho en nuestro esquema de planificación, ProductList tiene que contener a ProductItem, lo cual hay que importar ProductItem en ProductList. Vamos a ProductLost.jsx y queda así:

<div>   ------------------> Etiquetas HTML
    <ProductItem/>   
    <ProductItem/>    ----> Etiquetas xml
    <ProductItem/>
</div>

Renombramos la etiqueta <div> por <section>

En el componente de clase, cuando se haga el return("cualquier cosa"), solo puede devolver una única caja (div, img, section, p) y dentro de esta todas las demás etiquetas que se quieran devolver.



Ahora, hay que enganchar ProductList a Main. En Main.jsx:

<main>
    <ProductList/>
</main>

Renombramos la etiqueta <div> por <article>


Después de todo esto comprobamos el arbol de componentes para ver si está todo correcto.


A continuación, podemos pasarle propiedades/atributos a los componentes ProductItem, en ProductList.jsx:

nombre = {"Mensaje renderizado"}

Ejemplo:

<section>
    <ProductItem info={"Botella Moet con Bengala"} price={20}/>
    <ProductItem info={"Cubo de 5 Coronitas"} price={10}/>
    <ProductItem info={"Botella de absenta con agua"} price={40}/>
</section>



En ProductItem.jsx, si te pasan desde ProductList.jsx los atributos "Nombre" y "Precio", se puede crear algo así:

<article>
    <h3>{this.props.info}</h3>
    <p>Price: {this.props.price}€</p>
</article>


Para leer lo que le ha pasado el componente padre al hijo se utiliza en ProductItem.jsx el objeto "this.props", más el nombre de la propiedad --> "this.props.price". Entonces, dentro de la etiqueta que corresponda la sintaxis sería "{this.props.price}" y "{this.props.info}"

En el árbol de componentes, clicando sobre el componente, se puede ver las propiedades que se le pasa


La idea es que el día de mañana, se hará un fetch a algún sitio, te traerá un montón de datos, le das a un bucle y empezará a pintar tarjetas pasándole por "props" al componente correspondiente lo que se necesite




.
.
.
.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)