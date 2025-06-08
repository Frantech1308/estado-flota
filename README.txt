
# Estado de Flota - Web App (Supabase)

Este proyecto contiene dos archivos HTML conectados a Supabase para visualizar y administrar el estado de una flota de aeronaves.

---

## 🔗 Requisitos

- Cuenta gratuita en [Supabase.io](https://supabase.io)
- Haber creado las siguientes tablas:

### Tabla: `aircraft`

| Columna       | Tipo     |
|---------------|----------|
| id            | integer (PK, autoincrement) |
| registration  | text     |
| manufacturer  | text     |
| model         | text     |
| status        | text     |

### Tabla: `activity_log`

| Columna       | Tipo     |
|---------------|----------|
| id            | integer (PK, autoincrement) |
| registration  | text     |
| old_status    | text     |
| new_status    | text     |
| notes         | text     |
| user_name     | text     |

---

## 📁 Archivos

### `index.html`
Visualiza el estado actual de la flota, agrupada por fabricante. Se conecta automáticamente a Supabase para obtener la información cada 15 segundos.

### `admin.html`
Permite al Jefe de Taller seleccionar una aeronave, cambiar su estado y dejar notas opcionales. Registra también los cambios en la tabla `activity_log`.

---

## ⚙️ Cómo usar

1. Abre ambos archivos en un editor de texto o VS Code.
2. Busca y reemplaza en cada archivo lo siguiente:

```
'https://TU_PROYECTO.supabase.co'
'TU_PUBLIC_ANON_KEY'
```

Usa los datos que encuentras en Supabase en:
**Project Settings > API > URL y anon key**

3. ¡Abre `index.html` en una pestaña y `admin.html` en otra y comienza a gestionar tu flota!

---

## 📌 Consejos

- Puedes alojar esto directamente en GitHub Pages.
- Si quieres actualizar automáticamente sin refrescar la vista, puedes implementar Supabase Realtime.

---

Desarrollado por ChatGPT y Fran1308 🚀
