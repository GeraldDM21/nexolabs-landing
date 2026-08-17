# Nexolabs Vea — Landing

Landing page de Nexolabs Vea, agencia de automatizacion con IA para retail
(supermercados, hoteles y pedidos express).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
app/
  layout.tsx      metadata y layout raiz
  page.tsx        compone las secciones
  globals.css     estilos base y utilidades
components/
  content.ts      todos los textos de la landing
  Navbar.tsx      nav fijo con menu movil
  Hero.tsx        seccion principal
  Problems.tsx    el problema que resolvemos
  Solution.tsx    los cuatro pilares del agente
  Capabilities.tsx  ventas / operacion / datos y equipo
  Flow.tsx        caso de uso paso a paso
  Ads.tsx         publicidad automatica
  Customization.tsx  personalizacion y sectores
  Contact.tsx     cierre y llamado a la accion
  Footer.tsx      pie de pagina
```

Para cambiar textos, edita `components/content.ts` — ahi esta todo el copy
centralizado.

## Deploy

Conectar el repo en Vercel. Detecta Next.js automaticamente, no hace falta
configurar nada.
