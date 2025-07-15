Para levantar el servidor del robotutor de forma local:

1. Levantar en una terminal el servidor del robotutor en el puerto 8050.

> python3 server.py -p 8050

2. Modificar la variable servidorManual (en el archivo settings.js) para que valga "true" (OJO: NO COMITTEAR ESTO).

3. Levantar un file server para acceder al cliente.

> python3 -m http.server

4. Abrir http://0.0.0.0:8000/ en un navegador.