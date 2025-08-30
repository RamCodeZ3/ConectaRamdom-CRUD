# 🎲 ConectaRandom

ConectaRandom es una aplicación web desarrollada con **React** que permite gestionar usuarios de forma sencilla.
Ofrece un **CRUD completo** y se integra con **Supabase** como backend para almacenar datos de manera eficiente.

---

## 🚀 Características

* ✅ Crear nuevos usuarios.
* ✅ Leer usuarios existentes.
* ✅ Actualizar usuarios.
* ✅ Eliminar usuarios.
* ✅ Obtener 12 usuarios aleatorios.
* ✅ Totalmente responsivo.
* ✅ No requiere inicio de sesión.

---

## 📂 Estructura del proyecto

## 📂 Estructura del proyecto
📦 ConectaRandom  
┣ 📂 backend  
┃ ┣ 📜 app.js # Servidor Express y endpoints  
┃ ┣ 📜 package.json  
┃ ┣ 📜 package-lock.json  
┃ ┣ 📂 node_modules  
┃ ┗ 📜 .env # Variables de entorno para Supabase  
┣ 📂 public  
┃ ┣ 📂 favicon  
┃ ┣ 📜 CR.png  
┃ ┗ 📜 user.png  
┣ 📂 src  
┃ ┣ 📂 assets  
┃ ┣ 📂 common  
┃ ┣ 📂 pages  
┃ ┣ 📂 section  
┃ ┣ 📜 App.jsx  
┃ ┣ 📜 main.jsx  
┃ ┣ 📜 index.css  
┃ ┗ 📜 routes.jsx  
┣ 📜 index.html  
┣ 📜 .gitignore  
┣ 📜 .eslintrc.js  
┣ 📜 package.json  
┣ 📜 package-lock.json  
┗ 📜 README.md # Documentación del proyecto

---

## 🛠️ Tecnologías

* **Frontend:** React, JavaScript, TailwindCSS
* **Backend:** Node.js, Express
* **Base de datos:** Supabase

---

## 📜 Endpoints del Backend

### `GET /`

Mensaje de bienvenida del servidor.

### `GET /users`

Obtiene todos los usuarios.

### `GET /usersrandom`

Obtiene 12 usuarios aleatorios.

### `GET /user/:id`

Obtiene un usuario específico.

### `POST /create`

Crea un nuevo usuario.

```json
{
  "name": "Nombre",
  "lastname": "Apellido",
  "birthdate": "YYYY-MM-DD",
  "age": 25,
  "email": "correo@ejemplo.com",
  "location": "Ciudad",
  "sex": "M/F",
  "url_img": "url_imagen",
  "hobby": "Hobby del usuario"
}
```

### `PUT /update/:id`

Actualiza un usuario específico.

### `DELETE /delete/:id`

Elimina un usuario específico.

---

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repo>
cd ConectaRandom
```

2. Instalar dependencias del backend:

```bash
cd backend
npm install
```

3. Configura el archivo `.env`:

```env
SUPABASE_URL=<tu-supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<tu-service-role-key>
```

4. Inicia el servidor:

```bash
node index.js
```

5. Instalar dependencias del frontend y ejecutarlo:

```bash
cd ../frontend
npm install
npm start
```

---

## ⚡ Uso

1. Abrir la aplicación en tu navegador: `http://localhost:3000`
2. Crear, editar o eliminar usuarios desde la interfaz.
3. Consultar usuarios aleatorios mediante la funcionalidad incluida.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un **issue** o hacer un **pull request** para sugerir mejoras o nuevas funcionalidades.

---

## 📄 Licencia

MIT License
