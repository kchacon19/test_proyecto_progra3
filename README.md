[README.md](https://github.com/user-attachments/files/26525669/README.md)
# 🏨 Brisa del Pacífico — Sitio Web del Hotel

Sitio web para el Hotel **Brisa del Pacífico**, ubicado en Guanacaste, Playa Danta, Costa Rica. Desarrollado con HTML5, CSS3, Bootstrap 5 y jQuery. Requiere PHP y Apache para el panel administrativo.

---

## 📋 Descripción

El proyecto es un sitio web de presentación para un hotel de lujo. Incluye páginas públicas para los huéspedes, un sistema de login y registro de usuarios, y un panel administrativo oficial basado en AdminLTE 3.

---

## 🗂 Estructura del Proyecto

```
hotel-brisa-del-pacifico/
├── public/
│   └── assets/
│       ├── css/
│       │   └── style.css        # Estilos globales personalizados
│       └── js/
│           └── main.js          # Lógica JavaScript compartida
└── app/
    └── views/
        ├── home.html            # Página de inicio (Hero + carrusel + habitaciones)
        ├── rooms.html           # Catálogo completo de habitaciones
        ├── services.html        # Servicios del hotel
        ├── location.html        # Ubicación y mapa interactivo (Dantita Beach)
        ├── contact.html         # Formulario de contacto y reservas
        ├── login.html           # Inicio de sesión
        ├── register.html        # Registro de usuario
        ├── dashboard.php        # Panel administrativo oficial (AdminLTE 3)
        ├── dist/                # Archivos CSS/JS de AdminLTE
        └── plugins/             # Plugins de AdminLTE (jQuery, Bootstrap, FontAwesome)
```

---

## 🚀 Cómo ejecutar el proyecto

El sitio público funciona con cualquier navegador. El `dashboard.php` **requiere Apache + PHP** para funcionar correctamente.

**Opción recomendada — con XAMPP:**
1. Instala [XAMPP](https://www.apachefriends.org/).
2. Copia la carpeta del proyecto dentro de `C:/xampp/htdocs/`.
3. Inicia Apache desde el panel de XAMPP.
4. Abre en el navegador:
```
http://localhost/nombre-de-la-carpeta/app/views/home.html
```

**Opción simple para páginas HTML (sin dashboard):**
```bash
# Abrir directamente en el navegador:
open app/views/home.html      # macOS
start app/views/home.html     # Windows
xdg-open app/views/home.html  # Linux
```

> ⚠️ El `dashboard.php` no funcionará si se abre como archivo directo (`file:///...`). Debe ejecutarse desde un servidor Apache.

---

## 📦 Dependencias externas (CDN)

Las páginas públicas cargan sus dependencias vía CDN. El dashboard usa archivos locales de AdminLTE.

**Páginas públicas (CDN):**

| Librería     | Versión | Uso                                      |
|--------------|---------|------------------------------------------|
| Bootstrap    | 5.3.0   | Grid, componentes y utilidades CSS       |
| jQuery       | 3.7.0   | Manipulación del DOM y eventos           |
| Font Awesome | 6.4.0   | Íconos vectoriales                       |
| Chart.js     | Latest  | Gráficas (no usado actualmente en vistas)|
| Google Fonts | —       | Tipografías Playfair Display y Open Sans |

**Dashboard (archivos locales en `dist/` y `plugins/`):**

| Librería    | Uso                              |
|-------------|----------------------------------|
| AdminLTE 3  | Plantilla del panel administrativo|
| jQuery      | Requerido por AdminLTE           |
| Bootstrap 4 | Base de AdminLTE                 |
| Font Awesome| Íconos del panel                 |

---

## 📄 Páginas del Sitio

| Archivo          | Descripción                                                              |
|------------------|--------------------------------------------------------------------------|
| `home.html`      | Página de inicio: Hero, carrusel de imágenes, esencia y habitaciones destacadas |
| `rooms.html`     | Catálogo de 4 habitaciones con precios y amenidades                      |
| `services.html`  | 6 servicios del hotel (restaurante, spa, gimnasio, tours, concierge, eventos) |
| `location.html`  | Mapa de Google Maps apuntando a Dantita Beach, Guanacaste                |
| `contact.html`   | Formulario de contacto/reserva e información del hotel                   |
| `login.html`     | Inicio de sesión — redirige al dashboard (admin) o home (usuario)        |
| `register.html`  | Registro de nuevo usuario                                                |
| `dashboard.php`  | Panel administrativo oficial con AdminLTE 3 — requiere Apache + PHP      |

---

## 🔐 Credenciales de Acceso (Login)

El login actualmente usa credenciales fijas definidas en `main.js`:

| Rol           | Email                   | Contraseña  | Redirección      |
|---------------|-------------------------|-------------|------------------|
| Administrador | admin123@gmail.com      | admin123    | dashboard.php    |
| Usuario       | user123@gmail.com       | user123     | home.html        |

> ⚠️ Estas credenciales son de prueba y están expuestas en el código frontend. No deben usarse en producción.

---

## 🎨 Sistema de Diseño

Las variables CSS están definidas en `style.css` y controlan la identidad visual del sitio:

```css
:root {
    --primary-color: #1B6CA8;   /* Azul océano — color principal */
    --secondary-color: #5BC0EB; /* Turquesa claro — acentos y botones */
    --accent-color: #F4ECDC;    /* Arena suave — fondos alternativos */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Open Sans', sans-serif;
}
```

**Clases CSS destacadas:**
- `.btn-dorado` — Botón principal turquesa
- `.btn-borde-dorado` — Botón secundario solo borde
- `.btn-pulso-corazon` — Animación de pulso en botones de habitaciones
- `.tarjeta-habitacion` — Tarjeta de habitación con zoom en imagen al hover
- `.tarjeta-servicio` — Tarjeta de servicio con elevación al hover

---

## 📊 Dashboard Administrativo

El panel administrativo (`dashboard.php`) está basado en **AdminLTE 3** y es la versión oficial del proyecto. Se accede únicamente después de iniciar sesión como administrador.

**Requisitos para que funcione:**
- Apache corriendo (XAMPP u otro servidor)
- Carpetas `dist/` y `plugins/` presentes en `app/views/`

---

## 📝 Notas del Desarrollador

- El formulario de contacto simula el envío con un `setTimeout` — no realiza peticiones reales a un servidor.
- El login usa credenciales hardcodeadas en `main.js` — en producción debe conectarse a un backend real.
- El botón de `login.html` tiene `onclick="login()"` que debe cambiarse a `type="submit"` ya que la función `login()` no existe.
- Los inputs de email y contraseña en `login.html` no tienen el atributo `required` — se recomienda agregarlo.

---

## 📬 Contacto

- **Email:** info@brisadelpacifico.com
- **Reservas:** reservas@brisadelpacifico.com
- **Teléfono:** +1 234 567 890

---

© 2026 Brisa del Pacífico. Todos los derechos reservados.
