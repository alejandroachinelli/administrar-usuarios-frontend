### Requisitos previos

* Node.js y npm instalados
* Docker (opcional, si deseas ejecutar la aplicación en un contenedor)

### Instrucciones para ejecutar

1. Clonar el repositorio:

```
git clone https://github.com/tu-usuario/tu-repositorio-frontend.git
cd tu-repositorio-frontend
```

2. Instalar las dependencias:

```
npm install
```

3. Ejecutar la aplicación localmente:

```
npm start
```

* La aplicación estará disponible en http://localhost:3000.

4. Opcional: Dockerizar la aplicación:

```
docker build -t nombre-proyecto-frontend .
docker run -p 3000:3000 nombre-proyecto-frontend
```

* La aplicación estará disponible en http://localhost:3000.