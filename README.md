# Nanda Eswar Vimal Boppudi - Portafolio Personal

Un sitio web de portafolio personal moderno y totalmente responsivo para Nanda Eswar Vimal Boppudi, un Desarrollador Full Stack de Java. Construido con React, TypeScript y estilizado con Tailwind CSS, presenta una interfaz de usuario elegante con tema oscuro y animaciones suaves y elegantes impulsadas por Framer Motion. El portafolio muestra eficazmente habilidades, experiencia profesional, proyectos e incluye un formulario de contacto funcional utilizando EmailJS.

## ✨ Características

- **Pila Tecnológica Moderna**: Construido con React, TypeScript y Tailwind CSS para una base de código robusta y mantenible.
- **Totalmente Responsivo**: Optimizado para una experiencia fluida en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles.
- **Animaciones Suaves**: Experiencia de usuario fluida con animaciones de Framer Motion.
- **Secciones Completas**: Incluye secciones detalladas para Inicio, Sobre mí, Experiencia, Habilidades, Servicios y Portafolio.
- **Formulario de Contacto Funcional**: Integrado con EmailJS para recibir mensajes directamente de los visitantes.

## 🛠️ Pila Tecnológica

- **Frontend**: React, TypeScript, HTML5
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formulario de Contacto**: EmailJS

---

## 🚀 Desplegando en GitHub Pages

GitHub Pages aloja archivos estáticos (HTML, CSS, JS). Dado que este proyecto está escrito en TypeScript (`.tsx`), debe ser "construido" o "compilado" a JavaScript estándar antes de poder ser desplegado. Los siguientes pasos te guiarán a través de este proceso utilizando **Vite**, una herramienta de construcción moderna y rápida.

### Paso 1: Configurar un Entorno de Proyecto Local

Primero, necesitas inicializar un proyecto de Node.js. Abre tu terminal en el directorio raíz del proyecto y ejecuta este comando:

```bash
npm init -y
```

Esto crea un archivo `package.json`, que gestionará las dependencias y scripts de tu proyecto.

### Paso 2: Instalar Paquetes Requeridos

A continuación, instala Vite y las otras herramientas necesarias para construir y desplegar el proyecto.

```bash
# Instalar dependencias de desarrollo (Vite, TypeScript, plugins)
npm install --save-dev vite @vitejs/plugin-react typescript gh-pages

# Instalar dependencias del proyecto (React)
# Nota: Aunque se cargan por CDN en index.html, Vite los necesita para construir.
npm install react react-dom
```

### Paso 3: Crear Archivos de Configuración

Vite y TypeScript necesitan archivos de configuración para saber cómo construir tu proyecto.

1.  **Configuración de Vite:** Crea un archivo llamado `vite.config.ts` en la raíz de tu proyecto y añade este contenido:

    ```ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/<TU-NOMBRE-DE-REPO>/' // IMPORTANTE: Reemplaza <TU-NOMBRE-DE-REPO>
    })
    ```
    **Importante:** Reemplaza `<TU-NOMBRE-DE-REPO>` con el nombre de tu repositorio de GitHub (p. ej., `/portfolio-website/`).

2.  **Configuración de TypeScript:** Crea un archivo llamado `tsconfig.json` en la raíz de tu proyecto:

    ```json
    {
      "compilerOptions": {
        "target": "ESNext",
        "useDefineForClassFields": true,
        "lib": ["DOM", "DOM.Iterable", "ESNext"],
        "allowJs": false,
        "skipLibCheck": true,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": ["."],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```

3.  Crea otro archivo llamado `tsconfig.node.json` en la raíz de tu proyecto:
    ```json
    {
      "compilerOptions": {
        "composite": true,
        "skipLibCheck": true,
        "module": "ESNext",
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true
      },
      "include": ["vite.config.ts"]
    }
    ```

### Paso 4: Preparar `index.html` para la Construcción

Vite se encargará de empaquetar todas tus dependencias, por lo que el `<script type="importmap">` ya no es necesario para la compilación final.

En `index.html`, **elimina todo el bloque `<script type="importmap">...</script>`**. Vite inyectará automáticamente los scripts necesarios durante el proceso de construcción. Tu archivo debería verse así (abreviado):

```html
<!-- ... (contenido del head) ... -->
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
    </style>
  <!-- ELIMINA EL BLOQUE SCRIPT TYPE="IMPORTMAP" DESDE AQUÍ -->
</head>
<body>
<!-- ... (contenido del body) ... -->
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
```

### Paso 5: Configurar Scripts de Despliegue

Abre tu archivo `package.json` y añade una URL de `homepage` y los `scripts` necesarios para el despliegue.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "homepage": "https://<TU-USUARIO>.github.io/<TU-NOMBRE-DE-REPO>",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": { ... },
  "dependencies": { ... }
}
```
**Importante:**
1.  Reemplaza `<TU-USUARIO>` con tu nombre de usuario de GitHub.
2.  Reemplaza `<TU-NOMBRE-DE-REPO>` con el nombre de tu repositorio.

### Paso 6: Desplegar en GitHub Pages

1.  **Commit y Push:** Guarda todos tus archivos nuevos y modificados (`package.json`, `vite.config.ts`, etc.) en tu repositorio de GitHub.
    ```bash
    git add .
    git commit -m "Configurar proyecto para despliegue en GitHub Pages"
    git push origin main
    ```

2.  **Ejecutar el Script de Despliegue:** En tu terminal, ejecuta el siguiente comando:
    ```bash
    npm run deploy
    ```
    Este comando primero ejecutará `predeploy` (que construye tu proyecto en una carpeta `dist`) y luego ejecutará `deploy` (que sube la carpeta `dist` a una nueva rama `gh-pages` en tu repositorio).

### Paso 7: Configurar los Ajustes del Repositorio de GitHub

1.  Ve a tu repositorio en GitHub.
2.  Haz clic en la pestaña **"Settings"**.
3.  En la barra lateral izquierda, haz clic en **"Pages"**.
4.  En "Build and deployment", establece la **Fuente (Source)** en **"Deploy from a branch"**.
5.  En "Branch", selecciona **`gh-pages`** y mantén la carpeta como **`/(root)`**. Haz clic en **"Save"**.

Después de unos minutos, tu sitio web de portafolio estará en línea en la URL `homepage` que especificaste en tu `package.json`.