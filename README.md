# Reto NEXTjs para el equipo Web

## Sistema de diseño

### Colores:

1. Gris: #A19DA2

- Textos
- Bordes
- iconos

2. Primary: # 5E3FB7

- Botones
- Iconos
- Gradientes

3. Secondary: # F3F4F8

- Background

  - Avatar
  - Signin
  - Dashboard
  - Iconos de modal

- Utilizar escala de múltiplos de 4(px) para espaciados (margen, padding).
- Mínima resolución 1200 px – Visualización responsive a su discreción.
- Se utiliza un máximo de 12 columnas para cuadricula (Grips)
- Radio de los bordes 10px

### Lineamientos:

| Diseño y estructura | Formularios     | Http Request | Datos        | Internalización |
| ------------------- | --------------- | ------------ | ------------ | --------------- |
| MUI                 | MUI             | AXIOS        | LOCALSTORAGE | next-i18next    |
| SASS                | React hook form |              |              |
| Typescript          | YUP             |              |              |
| Redux toolkit       |                 |              |              |

### Utilizar el siguiente template para la realización de la practica en el branch develop

[web-nextjs-template](https://code.novopayment.com/novopayment/web-nextjs-template/tree/develop)

### Colección para peticiones postman

[postman](https://api.postman.com/collections/6141833-cb390edd-d23a-4d79-b790-c4d42692095c?access_key=PMAT-01GS8HBN092CJ9X7M22H2EAZVW)

### Prototiopo Guía

[Prototipo en figma](https://www.figma.com/proto/iuqYDOPGKjGIdrqCe8BOyA/Prueba-Web?page-id=0%3A1&node-id=1-3&viewport=627%2C417%2C0.25&scaling=min-zoom&starting-point-node-id=1%3A3)

### Consideraciones

1. Cuando el usuario no cuente con tarjeta al iniciar sesión debe dirigirlo al formulario de registro de tarjeta.
2. Cuando una tarjeta no tenga movimientos se debe mostrar un mensaje.
3. El número de tarjeta se debe registrar con la longitud de 16 dígitos sin enmascarar.
4. Por defecto al registrar una tarjeta siempre debe ir con el atributo primary: ‘false’
