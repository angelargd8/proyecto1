# proyecto1
# Link del blog: 
    http://uwu-guate.site:3200/

## usuario adminitrador
    user:angel  
    password: 123
## Descripcion del proyecto
    En este proyecto se aplican conocimientos prácticos acerca del desarrollo de Javascript, usando react y vite para la creacion de una aplicacion web. Además, que se implementa el lado del servidor de la aplicacion web. 

    Acerca del tema de la aplicacion, es de MBTI y se escogio este tema debido a que se considera que existe poca información en español de este tema y que hay bastante desinformación en redes sociales.

## Tecnologías usadas:
    - Vite
    - React
    - Docker
    - Babel
    - HTML
    - JavaScript
    - CSS

    Se escogieron estas tecnologías, debido a que se estan aplicando conocimientos prácticos de la clase de web.


## Instrucciones para ejecutar el proyecto localmente

    instalar esto en la terminal:
    npm install react-router-dom

    en la parte del backend:
    - npm install cors
    - npm install mysql2
    - npm install -g nodemon
    - npm install -g eslint
    - npm install --save-dev eslint
    - npm install swagger-ui-express
    - npm install js-yaml
    - npm install -g swagger2openapi

# Parte del backend: 
## main.js
endpoints, validaciones, funciones para el blog, llama a las funciones de db.js para: 
GET posts/info que retorna un listado de todos los posts. 
GET /posts/f que retorna el detalle de un de todas las funciones
POST /posts que permite crear un nuevo post. 
PUT /post/update/:id update posts 
DELETE /post/delete/:id que borra un post. 


## db.js
funciones con los querys para obtener todos los post, crear post, get post by id, update post y delete.


## conn.js
conexion a la base de datos

## package.json
el json literal jaja, btw esta en modo commonjs, entonces no se pueden usar imports

## Carpeta: comandos xd
archivos:
- comandos: comandos generales usados y para generar una aplicacion tipo json
- esslint: comandos de eslint
- swagger: comandos de swagger 
