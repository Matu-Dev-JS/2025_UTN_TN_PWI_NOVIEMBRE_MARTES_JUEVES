## Crear un repositorio local de GIT

git init (Inicializamos el repositorio local)


## Para dar seguimiento a nuestros archivos

git add .

## Renombrar la rama principal de master a main
git branch -M main

## Añadir un orgien remoto (adonde vamos a subir nuestro codigo)
git remote add origin https://github.com/Matu-Dev-JS/Repo-de-prueba.git

## Enviar el ultimo commit a la rama principal
git push -u origin main


## Una vez ya creado el repo y quieran subir algun cambio

git add .
git commit -m "mensaje"
git push