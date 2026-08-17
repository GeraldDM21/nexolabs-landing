# Nexolabs — Landing

Landing page de Nexolabs, agencia de automatizacion con IA para retail
(supermercados, hoteles y pedidos express).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- three.js + @react-three/fiber para la escena 3D del hero

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
app/
  layout.tsx        metadata y layout raiz
  page.tsx          compone las secciones
  globals.css       estilos base, texturas y animaciones
components/
  content.ts        TODO el texto de la landing (editar aqui)
  Scene.tsx         escena 3D: red de nodos + nucleo + anillos
  hooks.ts          reveal al scroll, tilt 3D, progreso de scroll
  ui.tsx            Reveal, TiltCard, Eyebrow
  Navbar.tsx        nav fijo, menu movil, barra de progreso
  Hero.tsx          hero con capa 3D y metricas
  Problems.tsx      el problema que resolvemos
  Solution.tsx      los cuatro pilares del agente
  Capabilities.tsx  ventas / operacion / datos y equipo
  Flow.tsx          caso de uso paso a paso
  Ads.tsx           publicidad automatica
  Customization.tsx personalizacion y sectores
  Contact.tsx       cierre y llamado a la accion
  Footer.tsx        pie de pagina
```

## Editar contenido

Todo el copy vive en `components/content.ts`. Para cambiar textos, agregar
capacidades o ajustar el mensaje no hace falta tocar ningun componente.

## La escena 3D

`components/Scene.tsx` dibuja una red de nodos conectados que orbita y sigue
suavemente el cursor: representa al agente enlazado con los sistemas del
negocio. Se carga solo en el cliente (`dynamic` con `ssr: false`) para no
afectar el render del servidor.

Parametros para ajustar en el archivo:

- `NODE_COUNT` — cantidad de nodos (90 por defecto)
- `LINK_DISTANCE` — que tan cerca deben estar dos nodos para conectarse
- `RADIUS` — tamano de la esfera

La pagina respeta `prefers-reduced-motion`: si el usuario tiene animaciones
reducidas en su sistema, se desactivan transiciones y tilt.

## Deploy

Conectar el repo en Vercel. Detecta Next.js automaticamente, no hace falta
configurar nada.
