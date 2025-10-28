
// Importa la función defineConfig de Vite para definir la configuración del proyecto
import { defineConfig } from 'vite'
// Importa el plugin de React para Vite, que permite usar React con Vite fácilmente
import react from '@vitejs/plugin-react'


// Exporta la configuración de Vite
// Más información: https://vite.dev/config/
export default defineConfig({
  // Lista de plugins a utilizar, en este caso solo el de React
  plugins: [react()],
})
