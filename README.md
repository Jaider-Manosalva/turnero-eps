# Turnero EPS – Frontend

Aplicación en React + TypeScript con Vite y Tailwind CSS v4 para gestionar login, kiosko y vistas de TV.

## Requisitos
- Node.js `>=18`
- `pnpm` `>=8`

## Inicialización
- Clonar el repositorio.
- Instalar dependencias: `pnpm install`
- Ejecutar en desarrollo: `pnpm dev` y abrir `http://localhost:5173/`
- Lint: `pnpm run lint`
- Build de producción: `pnpm run build` (genera `dist/`)

## Rutas principales
- `/` Login
- `/admin` Vista administrativa (placeholder)
- `/tv` Selección de vista
- `/tv/full` Vista completa de turnos
- `/tv/media` Vista con videos + turnos
- `/kiosk` Kiosko: flujo Datos → Consultorio → Prioridad → Resumen → Confirmación

## Estructura
- `src/features/auth/Login.tsx` pantalla de acceso con loader.
- `src/features/admin/Admin.tsx` placeholder de administración.
- `src/features/tv/TvSelect.tsx` selector de tipo de vista.
- `src/features/tv/TvFull.tsx` tablero de turnos con reloj en tiempo real.
- `src/features/tv/TvMedia.tsx` reproductor de YouTube + lista de turnos.
- `src/features/kiosk/KioskForm.tsx` flujo de kiosko por pasos y confirmación de turno.
- `src/components/ui/LoaderDots.tsx` componente de loader reutilizable.
- `src/data/*.json` datos de prueba para conectar luego al API.

## Datos de prueba
- Turnos: `src/data/turnos.json`
- Consultorios: `src/data/consultorios.json`
- Prioridades: `src/data/prioridades.json`
- Videos: `src/data/videos.json`

Para videos, agregar objetos con `{ "id": "<id_youtube>", "title": "<título>" }`.
Ejemplo de YouTube: URL `https://www.youtube.com/watch?v=LCGT_DYEX3s` → `id: LCGT_DYEX3s`.

## Estilos
- Tailwind v4 con plugin `@tailwindcss/vite` configurado en `vite.config.ts`.
- Importación global en `src/index.css`: `@import "tailwindcss";`
- Paleta usada: verde `#8DBC63` y azul `#439282`.

## Notas
- Autoplay de videos usa `mute=1` para habilitar reproducción automática de iframes.
- Los relojes de TV se actualizan cada segundo con `setInterval`.
- El flujo de kiosko simula la asignación de turno y retorna al inicio automáticamente.
