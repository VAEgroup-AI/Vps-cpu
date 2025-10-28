// Importa la configuración recomendada de ESLint para JavaScript
import js from '@eslint/js'

// Importa definiciones de variables globales para diferentes entornos
import globals from 'globals'

// Plugin para aplicar reglas recomendadas de los hooks de React
import reactHooks from 'eslint-plugin-react-hooks'

// Plugin para soportar React Refresh (Fast Refresh) en desarrollo
import reactRefresh from 'eslint-plugin-react-refresh'

// Funciones utilitarias de ESLint para definir configuración y exclusiones globales
import { defineConfig, globalIgnores } from 'eslint/config'


// Exporta la configuración de ESLint
export default defineConfig([
  
  // Ignora la carpeta 'dist' para que ESLint no analice archivos generados
  globalIgnores(['dist']),
  {
    // Aplica las reglas a todos los archivos JS y JSX
    files: ['**/*.{js,jsx}'],
    
    // Extiende configuraciones recomendadas de ESLint, React Hooks y React Refresh
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      
      // Especifica la versión de ECMAScript
      ecmaVersion: 2020,
      
      // Define variables globales del entorno navegador
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        
        // Habilita el soporte para JSX
        ecmaFeatures: { jsx: true },
        
        // Usa módulos ECMAScript
        sourceType: 'module',
      },
    },
    rules: {
      // Marca como error las variables no usadas, pero ignora las que empiezan con mayúscula o guion bajo
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
