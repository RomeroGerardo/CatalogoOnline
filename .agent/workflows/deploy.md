---
description: Desplegar la aplicación a Vercel (Gratis)
---

# Workflow de Despliegue en Vercel

Este workflow permite subir el catálogo web a la nube de forma gratuita.

1. **Construir el Proyecto**
   Ejecuta el comando para generar la versión de producción:
   ```powershell
   npm run build
   ```

2. **Instalar Vercel CLI (Si no está instalado)**
   Si es la primera vez, el usuario debe tener Vercel CLI.
   ```powershell
   npm install -g vercel
   ```

3. **Login en Vercel**
   El usuario debe estar logueado (solo la primera vez):
   ```powershell
   vercel login
   ```

4. **Desplegar**
   // turbo
   Ejecuta el comando de despliegue. Este comando es seguro para auto-ejecución si ya estás logueado y configurado:
   ```powershell
   vercel --prod --yes
   ```

> [!NOTE]
> La primera vez que se ejecute `vercel`, preguntará algunas configuraciones básicas (nombre del proyecto, etc.). Una vez configurado, el paso 4 será automático.
