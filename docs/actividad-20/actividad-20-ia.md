# Actividad 20: investigación sobre Hugging Face

**Proyecto:** Portal de Normativas DGCyE.

**Integrantes:** Zoe Linares, Alina Romero, Valentin Wagner y Thiago Salaberry.

**Web:** [proyecto-dgce.vercel.app](https://proyecto-dgce.vercel.app/).

## Objetivo

Investigamos cómo podríamos incorporar inteligencia artificial al Portal de Normativas DGCyE para ayudar a docentes e inspectores a encontrar y comprender documentación educativa. Elegimos Hugging Face para analizar sus herramientas y plantear una posible aplicación en nuestro proyecto. El alcance de este trabajo es la investigación y la propuesta de funcionamiento; no integramos un modelo al portal ni realizamos una prueba de inferencia.

## ¿Qué es Hugging Face?

Hugging Face es una plataforma que reúne modelos, conjuntos de datos y aplicaciones de aprendizaje automático. Su servicio Inference Providers permite acceder mediante una API a modelos alojados por distintos proveedores. Un modelo de lenguaje procesa instrucciones y genera texto a partir de la información que recibe (Hugging Face, s. f.-a).

## Aplicación en nuestro portal

Nuestra propuesta consiste en complementar el buscador con un asistente que responda preguntas sobre las normativas. Por ejemplo, un docente podría consultar: «¿Cuáles son las pautas para ferias de ciencias?». El sistema buscaría documentos relacionados, enviaría al modelo la pregunta y los fragmentos relevantes, y mostraría una respuesta breve con sus fuentes. Cuando los documentos no contengan la información necesaria, el asistente indicaría esa limitación.

La circular sobre ferias que incluimos en el prototipo es ficticia y su descripción no contiene las pautas oficiales completas. Para llevar esta propuesta a una aplicación real necesitaríamos documentos oficiales, completos, verificados y actualizados.

## Funcionamiento propuesto

Planteamos un formulario de consulta y un área de respuesta dentro del portal. Al recibir una pregunta, el sistema seleccionaría fragmentos relacionados y los enviaría mediante Fetch a una función de servidor. Esa función consultaría un modelo a través de Hugging Face Inference Providers y devolvería la respuesta al navegador. El resultado incluiría los enlaces a los documentos utilizados (Hugging Face, s. f.-a; MDN Web Docs, s. f.).

También contemplamos los estados de espera, las consultas vacías, los errores de conexión y la ausencia de resultados. El modelo no conoce automáticamente las normativas del proyecto: nuestra aplicación tendría que seleccionar y proporcionarle los textos correspondientes.

## Seguridad, costos y limitaciones

En la propuesta, el token de acceso se guardaría en una variable de entorno del servidor, fuera del código del navegador y del repositorio (Vercel, s. f.). También consideramos la privacidad de los datos antes de enviar información a un servicio externo.

El uso del servicio depende de la disponibilidad de los proveedores, los límites de consumo y los precios vigentes (Hugging Face, s. f.-b). Además, las respuestas pueden contener errores u omisiones. Por eso planteamos mostrar las fuentes y conservar el acceso a los documentos originales para contrastar la información.

## Conclusión

Consideramos que un asistente podría facilitar la consulta de normativas mediante preguntas en lenguaje natural. Para incorporarlo necesitaríamos una base de documentos confiables, un mecanismo para recuperar fragmentos relevantes y una función de servidor que consulte el modelo. En esta actividad dejamos planteada esa posibilidad como una mejora futura del portal.

## Referencias

- Hugging Face. (s. f.-a). [Inference Providers](https://huggingface.co/docs/inference-providers/index).
- Hugging Face. (s. f.-b). [Pricing and billing](https://huggingface.co/docs/inference-providers/en/pricing).
- MDN Web Docs. (s. f.). [Uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch).
- Vercel. (s. f.). [Environment variables](https://vercel.com/docs/environment-variables).
