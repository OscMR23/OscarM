# Restricciones REST (Representational State Transfer)

REST es un estilo arquitectónico utilizado en el diseño de sistemas distribuidos como la web. Se define a través de una serie de restricciones que guían la interacción entre clientes y servidores. Estas restricciones son las siguientes:

## 1. Cliente-Servidor

La arquitectura REST sigue el modelo de cliente-servidor, que establece una clara separación entre las responsabilidades del cliente y del servidor. Esta separación tiene varias características:

- **Cliente**: Solicita recursos y los manipula, pero no almacena el estado de los recursos.
- **Servidor**: Proporciona acceso a los recursos y maneja la lógica de negocio y almacenamiento, pero no almacena el estado de la sesión del cliente.

## 2. Sin Estado (Stateless)

Cada interacción entre el cliente y el servidor debe ser independiente. Esto significa que el servidor no debe almacenar información del estado de la sesión del cliente entre las solicitudes.

- **Cada solicitud debe contener toda la información necesaria** para que el servidor la procese, ya sea en los encabezados, el cuerpo o los parámetros.
- No hay memoria compartida entre solicitudes; esto simplifica el servidor, pero puede hacer que las solicitudes sean más grandes si requieren mucha información repetida.

## 3. Cacheable

Las respuestas del servidor deben indicar si son cacheables o no. Esto significa que el cliente (o intermediarios como proxies) puede almacenar la respuesta para reutilizarla posteriormente.

- **Cache-Control** es un encabezado HTTP que define si la respuesta puede ser almacenada y durante cuánto tiempo.
- Las respuestas cacheables permiten reducir la carga en el servidor y disminuir la latencia.

## 4. Interfaz Uniforme

Uno de los principios clave de REST es que debe haber una interfaz uniforme para interactuar con el sistema, lo que facilita la interacción entre sistemas heterogéneos.

Los cuatro principios que guían la interfaz uniforme son:
- **Identificación de recursos en las solicitudes**: Cada recurso debe ser identificado por un URI (Uniform Resource Identifier).
- **Manipulación de recursos a través de representaciones**: Los recursos son representados mediante formatos estándar como JSON o XML, y estas representaciones se pueden manipular.
- **Mensajes autodescriptivos**: Las solicitudes y respuestas deben contener toda la información necesaria para que puedan ser entendidas sin contexto adicional.
- **Hipermedios como motor del estado de la aplicación (HATEOAS)**: El cliente debe descubrir cómo interactuar con el servidor de forma dinámica mediante hipervínculos en las respuestas.

## 5. Arquitectura en Capas

REST permite que un sistema se divida en capas. Cada capa tiene una función específica y no necesita conocer los detalles de las otras capas.

- Por ejemplo, una capa puede manejar la autenticación, otra el balanceo de carga, y otra el almacenamiento de datos.
- El cliente no sabe si está interactuando directamente con el servidor de origen o con un intermediario, lo que permite la introducción de proxies, balanceadores de carga y otros intermediarios.

## 6. Código bajo Demanda (Opcional)

Aunque es una restricción opcional, REST permite que el servidor envíe código ejecutable al cliente (como scripts JavaScript o applets) que puede mejorar la funcionalidad del cliente de forma dinámica.

- **Ejemplos comunes** son las aplicaciones web que envían código JavaScript para ser ejecutado en el navegador del cliente.

## Resumiendo los Principios REST

| Restricción             | Descripción                                                                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Cliente-Servidor**     | Separación de responsabilidades entre cliente y servidor.                                                                                                     |
| **Sin Estado (Stateless)**| Cada solicitud contiene toda la información necesaria.                                                                                                         |
| **Cacheable**            | Las respuestas pueden ser cacheadas por el cliente o intermediarios.                                                                                           |
| **Interfaz Uniforme**    | Uso de una interfaz común con identificación de recursos, manipulación a través de representaciones y mensajes autodescriptivos.                                |
| **Arquitectura en Capas**| División del sistema en capas para mejorar la modularidad y la escalabilidad.                                                                                  |
| **Código bajo Demanda**  | El servidor puede enviar código ejecutable al cliente (opcional).                                                                                              |

## Conclusión

Estas restricciones definen el estilo arquitectónico REST y contribuyen a que los sistemas sean más escalables, eficientes y mantenibles. Aunque algunas restricciones, como "código bajo demanda", son opcionales, otras, como "cliente-servidor" o "sin estado", son esenciales para que un sistema se considere verdaderamente RESTful.
