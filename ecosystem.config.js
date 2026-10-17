module.exports = {
  apps: [
    {
      name: "tintalimon",
      // Apunta directamente al archivo compilado por el modo standalone
      script: "./.next/standalone/server.js",

      // Ejecución en modo fork (recomendado por Vercel para mantener consistencia de caché)
      exec_mode: "fork",
      instances: 1,

      autorestart: true,
      watch: false,
      max_memory_restart: "300M",

      // Variables de entorno para producción
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      }
    }
  ]
};
