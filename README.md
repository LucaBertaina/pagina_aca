<div align="center">

<img src="public/icons/favicon.svg" height="80" alt="" />

# Acción Católica — Asunción de la Virgen

**Sitio web de la Acción Católica de la parroquia Asunción de la Virgen**

[![CI](https://github.com/LucaBertaina/pagina_aca/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LucaBertaina/pagina_aca/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React Router](https://img.shields.io/badge/React_Router-8-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

Páginapara presentar el movimiento laical de la parroquia: quiénes somos, los grupos por edad, las actividades y cómo sumarse.

## Páginas

| Ruta           | Contenido                                       |
| -------------- | ----------------------------------------------- |
| `/`            | Presentación, pilares e invitación a sumarse    |
| `/grupos`      | Grupos por edad y cómo es el camino para entrar |
| `/actividades` | Actividades del movimiento                      |
| `/parroquia`   | La parroquia y su comunidad                     |
| `/contacto`    | Datos de contacto                               |

## Desarrollo

Requiere Node 22 y pnpm.

```bash
pnpm install
pnpm dev
```

## Producción

```bash
pnpm lint
pnpm build
pnpm preview
```

La salida queda en `dist/`.

## Estructura

```text
src/
├── components/   secciones y piezas de UI
├── pages/        una por ruta
├── data/         contenido (grupos, datos, pasos)
├── hooks/        usePageTitle
└── styles/       estilos
```

---

_Mendoza, Argentina · Luca Bertaina ([LucaBertaina](https://github.com/LucaBertaina)) y Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
