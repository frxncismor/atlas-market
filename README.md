# Atlas Market

Atlas Market es una plataforma de tienda en línea que utiliza tecnologías modernas para ofrecer una experiencia escalable y optimizada. Este repositorio contiene el código para el backend y el frontend del proyecto.

## Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo Local](#desarrollo-local)
- [Dockerización](#dockerización)
- [Integración Continua y Despliegue](#integración-continua-y-despliegue)
- [Despliegue en VPS con Traefik](#despliegue-en-vps-con-traefik)
- [Integración con Stripe](#integración-con-stripe)
- [Licencia](#licencia)

## Tecnologías

- **Frontend:** Angular 19 con soporte para Server-Side Rendering (SSR) y Static Site Generation (SSG)
- **Backend:** Strapi (CMS Headless)
- **Contenerización:** Docker
- **CI/CD:** GitHub Actions
- **Pasarela de Pago:** Stripe
- **Infraestructura:** VPS con Traefik como proxy inverso

## Estructura del Proyecto

El repositorio se organiza en dos carpetas principales:

- **/frontend**: Contiene la aplicación Angular 19.
  - Soporte para SSR y SSG.
  - Scripts para configuración (generación de environment.ts a partir de un archivo .env).
- **/backend**: Contiene la aplicación Strapi.
  - Configuración y extensiones personalizadas (incluyendo integración con Stripe).

Además, se incluyen archivos de configuración para Docker y pipelines de GitHub Actions.

## Requisitos Previos

- [Node.js](https://nodejs.org) (versión 16 o superior)
- [pnpm](https://pnpm.io) para gestión de dependencias
- [Docker](https://www.docker.com) y [Docker Compose](https://docs.docker.com/compose/)
- Cuenta en [Docker Hub](https://hub.docker.com) (para subir imágenes)
- Cuenta en [Stripe](https://stripe.com)
- Acceso a un VPS configurado con Traefik para el despliegue

## Configuración del Entorno

Crea un archivo `.env` en la raíz del repositorio (o en las carpetas correspondientes) con las siguientes variables (ajusta según tus necesidades):

```dotenv
# Variables para Stripe
STRIPE_PRIVATE_API_KEY=tu_clave_privada
STRIPE_PUBLIC_API_KEY=tu_clave_publica

# Otras variables necesarias para Strapi o Angular pueden incluirse aquí.
```
Importante: Por motivos de seguridad, no incluyas el archivo .env en el repositorio público. Usa un archivo .dockerignore para excluirlo de la imagen Docker.

## Desarrollo Local
### Frontend (Angular)
Navega a la carpeta frontend y ejecuta el script de configuración:
```bash
pnpm run config
```
Para iniciar el servidor de desarrollo:
```bash
pnpm start
```
Para construir la aplicación:
```bash
pnpm run build
```
Para ejecutar SSR localmente (después de agregar soporte Angular Universal):
```bash
pnpm run serve:ssr
```
### Backend (Strapi)
Navega a la carpeta backend y sigue la documentación de Strapi para configurar y ejecutar el CMS.
Para iniciar el servidor de Strapi:
```bash
pnpm develop
```
## Dockerización
Cada parte del proyecto tiene su propio Dockerfile. Se recomienda utilizar Docker Compose para levantar ambos servicios localmente.
Ejecuta:

```bash
docker compose up build
```
Este comando:
- Construye las imágenes de Angular y Strapi.
- Levanta los contenedores correspondientes.
- Permite probar la integración de frontend y backend en local.

## Integración Continua y Despliegue
El proyecto utiliza GitHub Actions para construir y publicar imágenes Docker en Docker Hub. El pipeline (archivo .github/workflows/docker-publish.yml) realiza los siguientes pasos:

- Realiza checkout del código.
- Inicia sesión en Docker Hub utilizando secretos (DOCKER_USERNAME y DOCKER_PASSWORD).
- Construye las imágenes Docker de frontend y backend.
- Publica las imágenes en Docker Hub.
- Configuración: Asegúrate de definir los secretos correspondientes en la configuración del repositorio en GitHub.

## Despliegue en VPS con Traefik
El VPS utiliza Traefik como proxy inverso. Se utiliza un archivo docker-compose.yml que define:

- Un servicio Traefik configurado para gestionar certificados SSL y enrutar el tráfico.
- Servicios para el frontend y el backend, etiquetados con las labels necesarias para que Traefik los detecte.
- Revisa la configuración en el archivo docker-compose.yml y actualiza dominios, puertos y correos electrónicos según tus necesidades.

## Integración con Stripe
El proyecto integra Stripe para procesar pagos.

- Frontend: Utiliza Stripe.js para redirigir a la página de pago y completar el flujo de compra.


## Licencia
© 2025 Francisco Javier Moreno Hinojosa | frxncismor. Todos los derechos reservados.