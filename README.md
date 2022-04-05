### React Test App

JavaScript challenge para Full Stack :
1) Un API usando Node.js + Express.js
2) Un Frontend cliente usando Bootstrap + React
3) Puntos opcionales para el challenge

## **1 realizacion de la Api**
**instalación:**
Debes tener instalado node.js una vez hayas clonado el proyecto, posteriormente  dentro de la carpeta  backend  ejecutar el comando:

*npm install *

una vez ejecutado este comando se crearla la carpeta node_module la cual contiene las dependencias necesarias para el funcionamiento del servidor para ejecutar el ambiente de desarrollo se ejecuta el comando:

*npm run dev*

este comando corre el servidor en el puerto localhost:4000

puedes consultar en el potsman la respuesta del servicio en las rutas:
- http://localhost:4000/file/data
- http://localhost:4000/file/list
- http://localhost:4000/file/list?fileName=test2.csv ( punto 3 opcional)

para la ejecucion del test ejecutar el comando:

*npm test*

frameworks  usados para el backend: 
- mocha
- chai
- express
- node-fetch

![imagen](https://user-images.githubusercontent.com/41463256/161693418-0ba2fe31-71fb-4476-a9b4-6ee34fef82ee.png)


## **2  realizacion del frontend**
**instalación:**
 Este proyecto se inició con Create React App se dirige a la carpeta frontend y ejecutan el comando 

*npm install *

 para ejecutar el ambiente de desarrollo se ejecuta el comando:

*npm start*

Ejecuta la aplicación en el modo de desarrollo.
Abra http://localhost:3000 para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones.
También verá cualquier error de pelusa en la consola.

frameworks  usados para el frontend: 
- react
- React Bootstrap
- node-fetch
- hook useEffects
- hook useState

![imagen](https://user-images.githubusercontent.com/41463256/161693979-8303d651-2396-4e04-be82-77fec9e12d22.png)
