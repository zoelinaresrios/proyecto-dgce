# Actividad 20: guía de entrega

Fecha indicada en la consigna: **18 de noviembre de 2026**.

## 1. Repositorio

El repositorio configurado para este proyecto es [zoelinaresrios/proyecto-dgce](https://github.com/zoelinaresrios/proyecto-dgce). Estos documentos se encuentran inicialmente en la copia local; deben subirse a GitHub antes de que aparezcan allí. Una persona con permiso de escritura puede hacerlo desde la carpeta del proyecto:

```bash
git add -A
git commit -m "Actualizar entrega de actividad 20"
git push origin main
```

Si Git pide autenticación o rechaza el acceso, iniciar sesión con una cuenta que tenga permiso en el repositorio. Revisar previamente los cambios con `git diff` y `git status`.

## 2. Publicar en Vercel

1. Ingresar a [Vercel](https://vercel.com/) y acceder con GitHub.
2. En el panel, elegir **Add New → Project** y seleccionar `zoelinaresrios/proyecto-dgce`. Si no aparece, revisar los permisos de la integración de GitHub o pedir acceso a la persona dueña.
3. Importar el repositorio. Es un sitio estático: el archivo `index.html` está en la raíz y no necesita instalar dependencias ni ejecutar una compilación. Dejar la configuración automática y comprobar que no se haya configurado un directorio de salida incorrecto.
4. Seleccionar **Deploy**. Al terminar, abrir la URL de producción HTTPS que muestra Vercel.
5. Probar el buscador, los filtros, los detalles y la vista móvil. Comprobar también los enlaces de anexos y explicar que son de demostración.
6. Agregar la URL verificada al README y al guion del pitch. Los cambios posteriores que lleguen a la rama de producción conectada pueden generar nuevos despliegues automáticamente.

Documentación: [despliegue de repositorios en Vercel](https://vercel.com/docs/git).

## 3. Investigación de IA

Leer [la investigación de Hugging Face](actividad-20-ia.md). La consigna admite un registro de investigación o una integración básica. Este proyecto presenta la investigación y no afirma tener una integración funcionando. Si el docente exige una demostración práctica, realizar una prueba y documentar el modelo elegido, la pregunta, la respuesta, sus fuentes y los límites observados.

## 4. Código QR

1. Abrir el [QR generado](qr-portal.svg), que apunta a https://proyecto-dgce.vercel.app/.
2. Escanearlo con un celular distinto y comprobar que abre el portal correcto.
3. Usar la imagen en la entrega y la Expo. Si cambia la URL, generar y probar el QR nuevamente.

## 5. Pitch y comprobación final

Ensayar el [guion de presentación](actividad-20-pitch.md). Antes de entregar, comprobar: repositorio actualizado en `main`, URL pública HTTPS accesible, investigación de IA incluida y QR probado. No presentar los datos de ejemplo como normativas oficiales.
