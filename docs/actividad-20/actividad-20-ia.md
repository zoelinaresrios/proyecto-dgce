# Actividad 20: investigación sobre Hugging Face

## Objetivo

Explorar cómo un asistente de inteligencia artificial podría ayudar a docentes e inspectores a encontrar y resumir normativas en el Portal DGCyE. Esta entrega es una **investigación**: el portal todavía no está conectado a un modelo de IA y no se realizó una prueba de inferencia como parte de este registro.

## ¿Qué es Hugging Face?

Hugging Face es una plataforma que reúne modelos, conjuntos de datos y aplicaciones de aprendizaje automático. Su servicio Inference Providers permite acceder a modelos alojados por distintos proveedores mediante una API. Un modelo de lenguaje recibe instrucciones y texto y genera una respuesta.

## Aplicación propuesta

Una persona podría preguntar: «¿Cuáles son las pautas para ferias de ciencias?». El portal buscaría primero documentos pertinentes y enviaría al modelo la pregunta y fragmentos de esos documentos. El asistente produciría una respuesta breve con la identificación de las fuentes. Si los textos disponibles no contienen la respuesta, debería indicarlo.

El proyecto actual incluye una circular de ejemplo sobre ferias de ciencia, pero sus datos y anexos son ficticios y la descripción disponible no necesariamente contiene las pautas completas. Por lo tanto, no permite afirmar cuáles son las pautas oficiales. Para una aplicación real se necesitarían documentos oficiales completos y verificados.

## Posible implementación

1. Agregar al portal un campo de pregunta y un área de respuesta.
2. Buscar en los documentos disponibles los fragmentos relacionados con la consulta.
3. Enviar la pregunta y esos fragmentos a una función de servidor propia mediante `fetch`.
4. La función consulta un modelo disponible mediante Hugging Face Inference Providers y devuelve la respuesta al navegador.
5. Mostrar la respuesta junto con las fuentes y permitir consultar el documento original.

La disponibilidad de modelos depende de los proveedores. Para una prueba se puede elegir un modelo de conversación disponible en el [Inference Playground](https://huggingface.co/inference) y registrar cuál se usó. El modelo puede cometer errores o inventar información: las respuestas deben verificarse contra los documentos. También hay que contemplar errores de conexión, límites de uso y disponibilidad del servicio.

## Seguridad y costos

Las solicitudes a Inference Providers requieren un token con permisos adecuados. El token debe guardarse como variable de entorno del servidor y nunca incluirse en `index.html`, en JavaScript enviado al navegador ni en el repositorio. Antes de utilizar datos personales o institucionales se debe evaluar si está permitido enviarlos a un servicio externo.

Hugging Face ofrece créditos de prueba limitados; su disponibilidad, condiciones y precios pueden cambiar. Consultar la página de precios antes de usar el servicio y no asumir que el uso es ilimitado o gratuito.

## Fuentes consultadas

- [Hugging Face: Inference Providers](https://huggingface.co/docs/inference-providers/index).
- [Hugging Face: precios y facturación](https://huggingface.co/docs/inference-providers/en/pricing).
- [MDN: uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch).
- [Vercel: variables de entorno](https://vercel.com/docs/environment-variables).
