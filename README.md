# Plataforma Educativa

Una aplicación web robusta diseñada para gestionar portales educativos. La plataforma ofrece funciones integrales para la administración de cursos, gestión de materiales de estudio, foros de discusión y evaluaciones, con dashboards personalizados para estudiantes, profesores y administradores. Además, la aplicación incorpora autenticación basada en roles, internacionalización y un diseño responsive que se adapta a cualquier dispositivo.

## Características

- **Autenticación y Roles:**  
  - Inicio de sesión con validación de credenciales para tres roles: administrador, profesor y estudiante.
  - Botón de cierre de sesión (Logout) visible en el Header.

- **Dashboards Personalizados:**  
  - **Estudiante:** Visualización de cursos inscritos, materiales de estudio, foros de discusión y evaluaciones.
  - **Profesor:** Funciones para crear y administrar cursos, subir materiales, evaluar participaciones y publicar anuncios.
  - **Administrador:** Panel con resumen del sistema, gestión de usuarios y cursos, configuración y reportes.

- **Internacionalización:**  
  - Cambio dinámico de idioma (ES/EN) en toda la aplicación mediante **react-i18next**.
  - Archivos JSON para traducción de todos los textos de la aplicación.

- **Diseño Responsive y Accesible:**  
  - Interfaz adaptada a diferentes dispositivos utilizando **Bootstrap**.
  - Uso de HTML semántico y atributos ARIA para mejorar la accesibilidad.

- **Navegación y Páginas Adicionales:**  
  - Página principal de bienvenida con botón de "Iniciar Sesión".
  - Página de contacto accesible desde el Navbar en todas las dashboards.

## Tecnologías Utilizadas

- **React:** Librería para construir interfaces de usuario.
- **React Router:** Manejo de rutas y navegación en Single Page Applications (SPA).
- **Context API:** Gestión del estado de autenticación y roles.
- **react-i18next / i18next:** Internacionalización y cambio dinámico de idioma.
- **Bootstrap:** Framework CSS para diseño responsive.
- **Axios:** Llamadas AJAX a APIs (simuladas en este ejemplo).
- **Socket.io Client:** Comunicación en tiempo real (para foros, si se implementa).

## Instalación y Uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión recomendada 14.x o superior)
- npm (incluido con Node.js)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/plataforma-educativa.git
   cd plataforma-educativa

# Ejecución en Desarrollo
Inicia el servidor de desarrollo:

```sh
npm start

