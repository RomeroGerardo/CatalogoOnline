---
description: Implementa un carrito de compras premium con integración a WhatsApp
---

Este workflow guía al asistente para implementar la funcionalidad de catálogo con carrito y pedidos vía WhatsApp en cualquier proyecto de React.

### Requisitos Previos
- **Tech Stack**: React, Tailwind CSS, Lucide React, Zustand, Sonner (Toasts).
- **Estructura**: `src/store/`, `src/lib/`, `src/components/common/`.

### Pasos de Implementación

1. **Estado Global (Zustand)**:
   - Crear/Actualizar `src/store/useAppStore.ts`.
   - Incluir interfaces `Product` y `CartItem`.
   - Implementar acciones: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`.
   - Añadir estados de interfaz: `isCartOpen`, `isFavoritesOpen`, `isSearchOpen`.

2. **Utilidad de WhatsApp**:
   - Crear `src/lib/whatsapp.ts`.
   - Implementar `generateWhatsAppLink(cart, total)` con formato profesional (emojis, saltos de línea).

3. **Componentes UI (Premium Design)**:
   - **Cart**: Panel lateral con efecto glassmorphism (`backdrop-blur`).
   - **FavoritesOverlay**: Panel para gestionar productos guardados.
   - **SearchOverlay**: Pantalla completa para búsqueda con filtros.
   - **ProductCard/Grid**: Actualizar para manejar el estado de búsqueda y botones directos.

4. **Integración Navbar**:
   - Añadir contadores de items y disparadores de overlays.

### Acciones de Turbo
// turbo
1. Instalar dependencias si faltan: `npm install zustand lucide-react sonner clsx tailwind-merge`
