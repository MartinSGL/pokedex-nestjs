<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejectuar en desarollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos (necesario tener docker)
```
  docker-compose up -d
```

5. Clonar el arhicvo __.env.tempplate__ y renombrar la copia a __.env__

6. Reconstruir las variables de entorno

7. Ejecutar la aplicacion en de:
```
yarn start:dev
```

7. Reconstruir la base de datos con la semilla
```

http://localhost:3000/api/v2/seed
```

### Stack utilizado
* MongoDB
* Nest

# Production Build
1. Crear el Archivo de produccion
```
.env.prod
````
2. Llenar las variables de entorno
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## features 

- [Class validator](https://www.npmjs.com/package/class-validator) and [Class transofrmer](https://www.npmjs.com/package/class-transformer) : permiten validar y transformar la data en los DTO 
- [Joi](https://www.npmjs.com/package/joi): Validat los datos provenientes del .env file (checar config/joi-validation file)
- @Nest/config: permite leer las variables de entorno
- @nestjs/serve-static: permite servir paginas staticas

## News

(ver carpeta common)
1. Custom Pipe for mongoose _id 
2. Patron adaptador para evitar dependencias ocultas en las clases (axios)
3. custom dto para paginacion
