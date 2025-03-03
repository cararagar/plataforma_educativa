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

## Estructura del Proyecto

La estructura de carpetas es la siguiente:

plataforma-educativa/ ├── node_modules/ ├── public/ │ ├── index.html │ └── favicon.ico ├── src/ │ ├── assets/ # Recursos estáticos (imágenes, fuentes, etc.) │ ├── components/ │ │ ├── auth/ # Componentes de autenticación (Login.js) │ │ ├── contact/ # Página de contacto (Contact.js) │ │ ├── dashboard/ # Dashboards para usuario, profesor y administrador │ │ │ ├── UserDashboard.js │ │ │ ├── TeacherDashboard.js │ │ │ └── AdminDashboard.js │ │ ├── home/ # Página de inicio (Home.js) │ │ ├── layout/ # Layout general (Header.js, Footer.js, ResponsiveLayout.js) │ │ └── common/ # Componentes comunes (LogoutButton.js) │ ├── context/ # Contextos globales (AuthContext.js) │ ├── i18n/ # Configuración de internacionalización y archivos de traducción │ │ ├── i18n.js │ │ └── locales/ │ │ ├── en/
│ │ │ └── translation.json │ │ └── es/ │ │ └── translation.json │ ├── routes/ # Rutas protegidas (PrivateRoute.js) │ ├── services/ # Servicios para llamadas a la API (courseService.js) │ ├── App.js # Componente principal con la configuración de rutas │ ├── index.js # Punto de entrada, importa Bootstrap e i18n │ └── index.css # Estilos globales ├── package.json └── README.md


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

La aplicación se abrirá en tu navegador en http://localhost:3000.

Construir para Producción
Para crear una versión optimizada para producción:
npm run build

Configuración de Internacionalización
Los archivos de traducción se encuentran en:

src/i18n/locales/es/translation.json
src/i18n/locales/en/translation.json
Puedes actualizar estos archivos para modificar los textos de la aplicación. El cambio de idioma se realiza mediante botones ubicados en el Header.

Contribución
Si deseas contribuir al proyecto, por favor crea un fork y envía un pull request. Para cambios importantes, abre primero un issue para discutir las modificaciones propuestas.