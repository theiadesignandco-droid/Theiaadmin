# Theia · Sistema de Gestión

App web para gestión de ventas, stock y usuarios.

## Acceso inicial

```
Usuario:    admin
Contraseña: Theia2025
```
> Cambiá esta contraseña desde "Mi cuenta" una vez que ingreses.

---

## ⚠️ Por qué no funciona en Netlify

Netlify solo sirve para sitios estáticos. Esta app necesita un **servidor Node.js persistente** con una **base de datos SQLite**, lo cual Netlify no soporta.

**La alternativa más simple con GitHub es Railway** — el proceso es idéntico al de Netlify.

---

## Deploy en Railway (recomendado · gratis)

Railway se conecta a GitHub igual que Netlify, pero sí soporta backends con base de datos.

### Paso a paso:

1. **Subí esta carpeta a GitHub**
   - Creá un repo nuevo en github.com
   - Arrastrá los archivos o usá Git

2. **Creá cuenta en [railway.app](https://railway.app)**
   - Podés entrar con tu cuenta de GitHub directamente

3. **Nuevo proyecto**
   - Click en **New Project**
   - Elegí **Deploy from GitHub repo**
   - Seleccioná tu repositorio

4. **Configurá las variables de entorno**
   - Andá a la pestaña **Variables** del proyecto
   - Agregá estas dos:

   | Variable | Valor |
   |----------|-------|
   | `JWT_SECRET` | cualquier texto largo y random (ej: `theia-super-secret-key-2025-xyz`) |
   | `PORT` | `3000` |

5. **Para que los datos NO se borren** (importante)
   - Andá a **Settings → Volumes**
   - Agregá un volumen montado en `/app`
   - Agregá la variable: `DB_PATH` = `/app/theia.db`

6. **¡Listo!** Railway te da una URL pública tipo:
   `https://theia-gestion-production.up.railway.app`
   
   Esa URL la compartís con tu equipo y funciona desde cualquier dispositivo.

---

## Deploy en Render (alternativa gratis)

1. Creá cuenta en [render.com](https://render.com)
2. **New → Web Service → Connect Repository**
3. Configuración:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Variables de entorno: igual que Railway
5. Para persistencia: creá un **Disk** montado en `/app`, y agregá `DB_PATH=/app/theia.db`

---

## Instalación local (para probar)

```bash
npm install
npm start
# Abre http://localhost:3000
```

---

## Roles

| Rol | Puede hacer |
|-----|------------|
| **Administrador** | Todo: crear usuarios, agregar productos, gestionar todo |
| **Vendedor** | Registrar ventas, ver stock, ingresar stock |

---

## Estructura

```
theia-gestion/
├── server.js          ← Backend (Express + SQLite)
├── public/
│   └── index.html     ← Frontend completo
├── package.json
├── .env.example
└── README.md
```

